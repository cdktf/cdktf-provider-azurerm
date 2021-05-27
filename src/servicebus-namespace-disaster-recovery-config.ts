// https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_disaster_recovery_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicebusNamespaceDisasterRecoveryConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_disaster_recovery_config.html#name ServicebusNamespaceDisasterRecoveryConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_disaster_recovery_config.html#partner_namespace_id ServicebusNamespaceDisasterRecoveryConfig#partner_namespace_id}
  */
  readonly partnerNamespaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_disaster_recovery_config.html#primary_namespace_id ServicebusNamespaceDisasterRecoveryConfig#primary_namespace_id}
  */
  readonly primaryNamespaceId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_disaster_recovery_config.html#timeouts ServicebusNamespaceDisasterRecoveryConfig#timeouts}
  */
  readonly timeouts?: ServicebusNamespaceDisasterRecoveryConfigTimeouts;
}
export interface ServicebusNamespaceDisasterRecoveryConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_disaster_recovery_config.html#create ServicebusNamespaceDisasterRecoveryConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_disaster_recovery_config.html#delete ServicebusNamespaceDisasterRecoveryConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_disaster_recovery_config.html#read ServicebusNamespaceDisasterRecoveryConfig#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_disaster_recovery_config.html#update ServicebusNamespaceDisasterRecoveryConfig#update}
  */
  readonly update?: string;
}

function servicebusNamespaceDisasterRecoveryConfigTimeoutsToTerraform(struct?: ServicebusNamespaceDisasterRecoveryConfigTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_disaster_recovery_config.html azurerm_servicebus_namespace_disaster_recovery_config}
*/
export class ServicebusNamespaceDisasterRecoveryConfig extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_namespace_disaster_recovery_config.html azurerm_servicebus_namespace_disaster_recovery_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicebusNamespaceDisasterRecoveryConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ServicebusNamespaceDisasterRecoveryConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_namespace_disaster_recovery_config',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._partnerNamespaceId = config.partnerNamespaceId;
    this._primaryNamespaceId = config.primaryNamespaceId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_primary_connection_string - computed: true, optional: false, required: false
  public get aliasPrimaryConnectionString() {
    return this.getStringAttribute('alias_primary_connection_string');
  }

  // alias_secondary_connection_string - computed: true, optional: false, required: false
  public get aliasSecondaryConnectionString() {
    return this.getStringAttribute('alias_secondary_connection_string');
  }

  // default_primary_key - computed: true, optional: false, required: false
  public get defaultPrimaryKey() {
    return this.getStringAttribute('default_primary_key');
  }

  // default_secondary_key - computed: true, optional: false, required: false
  public get defaultSecondaryKey() {
    return this.getStringAttribute('default_secondary_key');
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

  // partner_namespace_id - computed: false, optional: false, required: true
  private _partnerNamespaceId: string;
  public get partnerNamespaceId() {
    return this.getStringAttribute('partner_namespace_id');
  }
  public set partnerNamespaceId(value: string) {
    this._partnerNamespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerNamespaceIdInput() {
    return this._partnerNamespaceId
  }

  // primary_namespace_id - computed: false, optional: false, required: true
  private _primaryNamespaceId: string;
  public get primaryNamespaceId() {
    return this.getStringAttribute('primary_namespace_id');
  }
  public set primaryNamespaceId(value: string) {
    this._primaryNamespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNamespaceIdInput() {
    return this._primaryNamespaceId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicebusNamespaceDisasterRecoveryConfigTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ServicebusNamespaceDisasterRecoveryConfigTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      partner_namespace_id: cdktf.stringToTerraform(this._partnerNamespaceId),
      primary_namespace_id: cdktf.stringToTerraform(this._primaryNamespaceId),
      timeouts: servicebusNamespaceDisasterRecoveryConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
