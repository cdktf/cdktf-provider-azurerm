// https://www.terraform.io/docs/providers/azurerm/r/automation_dsc_nodeconfiguration.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationDscNodeconfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_dsc_nodeconfiguration.html#automation_account_name AutomationDscNodeconfiguration#automation_account_name}
  */
  readonly automationAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_dsc_nodeconfiguration.html#content_embedded AutomationDscNodeconfiguration#content_embedded}
  */
  readonly contentEmbedded: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_dsc_nodeconfiguration.html#name AutomationDscNodeconfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_dsc_nodeconfiguration.html#resource_group_name AutomationDscNodeconfiguration#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_dsc_nodeconfiguration.html#timeouts AutomationDscNodeconfiguration#timeouts}
  */
  readonly timeouts?: AutomationDscNodeconfigurationTimeouts;
}
export interface AutomationDscNodeconfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_dsc_nodeconfiguration.html#create AutomationDscNodeconfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_dsc_nodeconfiguration.html#delete AutomationDscNodeconfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_dsc_nodeconfiguration.html#read AutomationDscNodeconfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/automation_dsc_nodeconfiguration.html#update AutomationDscNodeconfiguration#update}
  */
  readonly update?: string;
}

function automationDscNodeconfigurationTimeoutsToTerraform(struct?: AutomationDscNodeconfigurationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/automation_dsc_nodeconfiguration.html azurerm_automation_dsc_nodeconfiguration}
*/
export class AutomationDscNodeconfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_automation_dsc_nodeconfiguration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/automation_dsc_nodeconfiguration.html azurerm_automation_dsc_nodeconfiguration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationDscNodeconfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationDscNodeconfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_dsc_nodeconfiguration',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automationAccountName = config.automationAccountName;
    this._contentEmbedded = config.contentEmbedded;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_account_name - computed: false, optional: false, required: true
  private _automationAccountName: string;
  public get automationAccountName() {
    return this.getStringAttribute('automation_account_name');
  }
  public set automationAccountName(value: string) {
    this._automationAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automationAccountNameInput() {
    return this._automationAccountName
  }

  // configuration_name - computed: true, optional: false, required: false
  public get configurationName() {
    return this.getStringAttribute('configuration_name');
  }

  // content_embedded - computed: false, optional: false, required: true
  private _contentEmbedded: string;
  public get contentEmbedded() {
    return this.getStringAttribute('content_embedded');
  }
  public set contentEmbedded(value: string) {
    this._contentEmbedded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEmbeddedInput() {
    return this._contentEmbedded
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutomationDscNodeconfigurationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AutomationDscNodeconfigurationTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automation_account_name: cdktf.stringToTerraform(this._automationAccountName),
      content_embedded: cdktf.stringToTerraform(this._contentEmbedded),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: automationDscNodeconfigurationTimeoutsToTerraform(this._timeouts),
    };
  }
}
