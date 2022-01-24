import {TextType} from "@/positioning/Coordinate";

export default function WidthProviderOnBrowser(text: string, type: TextType): number {
  let hiddenDiv = document.querySelector('.textarea-hidden-div') as HTMLDivElement;
  if (!hiddenDiv) {
    const newDiv = document.createElement('div');
    newDiv.className = 'textarea-hidden-div ' + (type === TextType.ParticipantName ? 'participant' : 'message');
    newDiv.style.display = 'inline';
    newDiv.style.zIndex = '-9999';
    newDiv.style.whiteSpace = 'nowrap';
    newDiv.style.visibility = 'hidden';
    newDiv.style.position = 'absolute';
    newDiv.style.top = '0';
    newDiv.style.left = '0';
    newDiv.style.overflow = 'hidden';
    newDiv.style.width = '0px';
    newDiv.style.height = '0px';
    newDiv.style.padding = '0px';
    newDiv.style.margin = '0px';
    newDiv.style.border = '0px';
    document.body.appendChild(newDiv);
    hiddenDiv = newDiv;
  }
  hiddenDiv.innerHTML = text;
  return hiddenDiv.scrollWidth;
}
