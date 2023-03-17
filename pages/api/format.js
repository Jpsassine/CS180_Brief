/**
 * In this file we create formatted strings that contain the
 * subject+body + prompt engineering for each message. These
 * are then sent to the openAI API and correct summaries
 * are sent back. Then a final mapping is created. This
 * mapping is from user to a 2D array containing formatted
 * string and summary string in each cell.
 *
 * ( user => { ["formatted_string", "summary_string"], [...], ... })
 *
 *  */
