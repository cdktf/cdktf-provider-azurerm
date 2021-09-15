// https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventgridDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#inbound_ip_rule EventgridDomain#inbound_ip_rule}
  */
  readonly inboundIpRule?: EventgridDomainInboundIpRule[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#input_schema EventgridDomain#input_schema}
  */
  readonly inputSchema?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#location EventgridDomain#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#name EventgridDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#public_network_access_enabled EventgridDomain#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#resource_group_name EventgridDomain#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#tags EventgridDomain#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#identity EventgridDomain#identity}
  */
  readonly identity?: EventgridDomainIdentity[];
  /**
  * input_mapping_default_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#input_mapping_default_values EventgridDomain#input_mapping_default_values}
  */
  readonly inputMappingDefaultValues?: EventgridDomainInputMappingDefaultValues[];
  /**
  * input_mapping_fields block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#input_mapping_fields EventgridDomain#input_mapping_fields}
  */
  readonly inputMappingFields?: EventgridDomainInputMappingFields[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#timeouts EventgridDomain#timeouts}
  */
  readonly timeouts?: EventgridDomainTimeouts;
}
export interface EventgridDomainInboundIpRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#action EventgridDomain#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#ip_mask EventgridDomain#ip_mask}
  */
  readonly ipMask?: string;
}

function eventgridDomainInboundIpRuleToTerraform(struct?: EventgridDomainInboundIpRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: struct!.action === undefined ? null : cdktf.stringToTerraform(struct!.action),
    ip_mask: struct!.ipMask === undefined ? null : cdktf.stringToTerraform(struct!.ipMask),
  }
}

export interface EventgridDomainIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#identity_ids EventgridDomain#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#type EventgridDomain#type}
  */
  readonly type: string;
}

function eventgridDomainIdentityToTerraform(struct?: EventgridDomainIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EventgridDomainInputMappingDefaultValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#data_version EventgridDomain#data_version}
  */
  readonly dataVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#event_type EventgridDomain#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#subject EventgridDomain#subject}
  */
  readonly subject?: string;
}

function eventgridDomainInputMappingDefaultValuesToTerraform(struct?: EventgridDomainInputMappingDefaultValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_version: cdktf.stringToTerraform(struct!.dataVersion),
    event_type: cdktf.stringToTerraform(struct!.eventType),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}

export interface EventgridDomainInputMappingFields {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#data_version EventgridDomain#data_version}
  */
  readonly dataVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#event_time EventgridDomain#event_time}
  */
  readonly eventTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#event_type EventgridDomain#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#id EventgridDomain#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#subject EventgridDomain#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#topic EventgridDomain#topic}
  */
  readonly topic?: string;
}

function eventgridDomainInputMappingFieldsToTerraform(struct?: EventgridDomainInputMappingFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    data_version: cdktf.stringToTerraform(struct!.dataVersion),
    event_time: cdktf.stringToTerraform(struct!.eventTime),
    event_type: cdktf.stringToTerraform(struct!.eventType),
    id: cdktf.stringToTerraform(struct!.id),
    subject: cdktf.stringToTerraform(struct!.subject),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface EventgridDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#create EventgridDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#delete EventgridDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#read EventgridDomain#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html#update EventgridDomain#update}
  */
  readonly update?: string;
}

function eventgridDomainTimeoutsToTerraform(struct?: EventgridDomainTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html azurerm_eventgrid_domain}
*/
export class EventgridDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_eventgrid_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/eventgrid_domain.html azurerm_eventgrid_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventgridDomainConfig
  */
  public constructor(scope: Construct, id: string, config: EventgridDomainConfig) {
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
    this._inputSchema = config.inputSchema;
    this._location = config.location;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._identity = config.identity;
    this._inputMappingDefaultValues = config.inputMappingDefaultValues;
    this._inputMappingFields = config.inputMappingFields;
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
  private _inboundIpRule?: EventgridDomainInboundIpRule[];
  public get inboundIpRule() {
    return this.interpolationForAttribute('inbound_ip_rule') as any;
  }
  public set inboundIpRule(value: EventgridDomainInboundIpRule[] ) {
    this._inboundIpRule = value;
  }
  public resetInboundIpRule() {
    this._inboundIpRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundIpRuleInput() {
    return this._inboundIpRule
  }

  // input_schema - computed: false, optional: true, required: false
  private _inputSchema?: string;
  public get inputSchema() {
    return this.getStringAttribute('input_schema');
  }
  public set inputSchema(value: string ) {
    this._inputSchema = value;
  }
  public resetInputSchema() {
    this._inputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputSchemaInput() {
    return this._inputSchema
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable ) {
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: EventgridDomainIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: EventgridDomainIdentity[] ) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // input_mapping_default_values - computed: false, optional: true, required: false
  private _inputMappingDefaultValues?: EventgridDomainInputMappingDefaultValues[];
  public get inputMappingDefaultValues() {
    return this.interpolationForAttribute('input_mapping_default_values') as any;
  }
  public set inputMappingDefaultValues(value: EventgridDomainInputMappingDefaultValues[] ) {
    this._inputMappingDefaultValues = value;
  }
  public resetInputMappingDefaultValues() {
    this._inputMappingDefaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputMappingDefaultValuesInput() {
    return this._inputMappingDefaultValues
  }

  // input_mapping_fields - computed: false, optional: true, required: false
  private _inputMappingFields?: EventgridDomainInputMappingFields[];
  public get inputMappingFields() {
    return this.interpolationForAttribute('input_mapping_fields') as any;
  }
  public set inputMappingFields(value: EventgridDomainInputMappingFields[] ) {
    this._inputMappingFields = value;
  }
  public resetInputMappingFields() {
    this._inputMappingFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputMappingFieldsInput() {
    return this._inputMappingFields
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventgridDomainTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EventgridDomainTimeouts ) {
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
      inbound_ip_rule: cdktf.listMapper(eventgridDomainInboundIpRuleToTerraform)(this._inboundIpRule),
      input_schema: cdktf.stringToTerraform(this._inputSchema),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      identity: cdktf.listMapper(eventgridDomainIdentityToTerraform)(this._identity),
      input_mapping_default_values: cdktf.listMapper(eventgridDomainInputMappingDefaultValuesToTerraform)(this._inputMappingDefaultValues),
      input_mapping_fields: cdktf.listMapper(eventgridDomainInputMappingFieldsToTerraform)(this._inputMappingFields),
      timeouts: eventgridDomainTimeoutsToTerraform(this._timeouts),
    };
  }
}
