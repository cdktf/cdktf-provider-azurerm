/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/private_dns_resolver_virtual_network_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id DataAzurermPrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}
  */
  readonly dnsForwardingRulesetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/private_dns_resolver_virtual_network_link#id DataAzurermPrivateDnsResolverVirtualNetworkLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/private_dns_resolver_virtual_network_link#name DataAzurermPrivateDnsResolverVirtualNetworkLink#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/private_dns_resolver_virtual_network_link#timeouts DataAzurermPrivateDnsResolverVirtualNetworkLink#timeouts}
  */
  readonly timeouts?: DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts;
}
export interface DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/private_dns_resolver_virtual_network_link#read DataAzurermPrivateDnsResolverVirtualNetworkLink#read}
  */
  readonly read?: string;
}

export function dataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsToTerraform(struct?: DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/private_dns_resolver_virtual_network_link azurerm_private_dns_resolver_virtual_network_link}
*/
export class DataAzurermPrivateDnsResolverVirtualNetworkLink extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_private_dns_resolver_virtual_network_link";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/data-sources/private_dns_resolver_virtual_network_link azurerm_private_dns_resolver_virtual_network_link} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_dns_resolver_virtual_network_link',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.66.0',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsForwardingRulesetId = config.dnsForwardingRulesetId;
    this._id = config.id;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_forwarding_ruleset_id - computed: false, optional: false, required: true
  private _dnsForwardingRulesetId?: string; 
  public get dnsForwardingRulesetId() {
    return this.getStringAttribute('dns_forwarding_ruleset_id');
  }
  public set dnsForwardingRulesetId(value: string) {
    this._dnsForwardingRulesetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsForwardingRulesetIdInput() {
    return this._dnsForwardingRulesetId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
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
    return this._name;
  }

  // virtual_network_id - computed: true, optional: false, required: false
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_forwarding_ruleset_id: cdktf.stringToTerraform(this._dnsForwardingRulesetId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
