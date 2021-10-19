// https://www.terraform.io/docs/providers/azurerm/d/eventgrid_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermEventgridDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventgrid_domain.html#inbound_ip_rule DataAzurermEventgridDomain#inbound_ip_rule}
  */
  readonly inboundIpRule?: DataAzurermEventgridDomainInboundIpRule[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventgrid_domain.html#name DataAzurermEventgridDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventgrid_domain.html#public_network_access_enabled DataAzurermEventgridDomain#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventgrid_domain.html#resource_group_name DataAzurermEventgridDomain#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventgrid_domain.html#tags DataAzurermEventgridDomain#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventgrid_domain.html#timeouts DataAzurermEventgridDomain#timeouts}
  */
  readonly timeouts?: DataAzurermEventgridDomainTimeouts;
}
export interface DataAzurermEventgridDomainInboundIpRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventgrid_domain.html#action DataAzurermEventgridDomain#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventgrid_domain.html#ip_mask DataAzurermEventgridDomain#ip_mask}
  */
  readonly ipMask?: string;
}

function dataAzurermEventgridDomainInboundIpRuleToTerraform(struct?: DataAzurermEventgridDomainInboundIpRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ip_mask: cdktf.stringToTerraform(struct!.ipMask),
  }
}

export class DataAzurermEventgridDomainInputMappingDefaultValues extends cdktf.ComplexComputedList {

  // data_version - computed: true, optional: false, required: false
  public get dataVersion() {
    return this.getStringAttribute('data_version');
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }
}
export class DataAzurermEventgridDomainInputMappingFields extends cdktf.ComplexComputedList {

  // data_version - computed: true, optional: false, required: false
  public get dataVersion() {
    return this.getStringAttribute('data_version');
  }

  // event_time - computed: true, optional: false, required: false
  public get eventTime() {
    return this.getStringAttribute('event_time');
  }

  // event_type - computed: true, optional: false, required: false
  public get eventType() {
    return this.getStringAttribute('event_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}
export interface DataAzurermEventgridDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/eventgrid_domain.html#read DataAzurermEventgridDomain#read}
  */
  readonly read?: string;
}

function dataAzurermEventgridDomainTimeoutsToTerraform(struct?: DataAzurermEventgridDomainTimeoutsOutputReference | DataAzurermEventgridDomainTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermEventgridDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/eventgrid_domain.html azurerm_eventgrid_domain}
*/
export class DataAzurermEventgridDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_eventgrid_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/eventgrid_domain.html azurerm_eventgrid_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermEventgridDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermEventgridDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventgrid_domain',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._inboundIpRule = config.inboundIpRule;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inbound_ip_rule - computed: false, optional: true, required: false
  private _inboundIpRule?: DataAzurermEventgridDomainInboundIpRule[] | undefined; 
  public get inboundIpRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('inbound_ip_rule') as any;
  }
  public set inboundIpRule(value: DataAzurermEventgridDomainInboundIpRule[] | undefined) {
    this._inboundIpRule = value;
  }
  public resetInboundIpRule() {
    this._inboundIpRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundIpRuleInput() {
    return this._inboundIpRule
  }

  // input_mapping_default_values - computed: true, optional: false, required: false
  public inputMappingDefaultValues(index: string) {
    return new DataAzurermEventgridDomainInputMappingDefaultValues(this, 'input_mapping_default_values', index);
  }

  // input_mapping_fields - computed: true, optional: false, required: false
  public inputMappingFields(index: string) {
    return new DataAzurermEventgridDomainInputMappingFields(this, 'input_mapping_fields', index);
  }

  // input_schema - computed: true, optional: false, required: false
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
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

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled') as any;
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermEventgridDomainTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermEventgridDomainTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermEventgridDomainTimeouts | undefined) {
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
      inbound_ip_rule: cdktf.listMapper(dataAzurermEventgridDomainInboundIpRuleToTerraform)(this._inboundIpRule),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: dataAzurermEventgridDomainTimeoutsToTerraform(this._timeouts),
    };
  }
}
