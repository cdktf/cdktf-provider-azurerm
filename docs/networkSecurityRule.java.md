# `networkSecurityRule` Submodule <a name="`networkSecurityRule` Submodule" id="@cdktf/provider-azurerm.networkSecurityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityRule <a name="NetworkSecurityRule" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule azurerm_network_security_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_security_rule.NetworkSecurityRule;

NetworkSecurityRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .access(java.lang.String)
    .direction(java.lang.String)
    .name(java.lang.String)
    .networkSecurityGroupName(java.lang.String)
    .priority(java.lang.Number)
    .protocol(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .description(java.lang.String)
//  .destinationAddressPrefix(java.lang.String)
//  .destinationAddressPrefixes(java.util.List<java.lang.String>)
//  .destinationApplicationSecurityGroupIds(java.util.List<java.lang.String>)
//  .destinationPortRange(java.lang.String)
//  .destinationPortRanges(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .sourceAddressPrefix(java.lang.String)
//  .sourceAddressPrefixes(java.util.List<java.lang.String>)
//  .sourceApplicationSecurityGroupIds(java.util.List<java.lang.String>)
//  .sourcePortRange(java.lang.String)
//  .sourcePortRanges(java.util.List<java.lang.String>)
//  .timeouts(NetworkSecurityRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.access">access</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#access NetworkSecurityRule#access}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#direction NetworkSecurityRule#direction}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#name NetworkSecurityRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.networkSecurityGroupName">networkSecurityGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#network_security_group_name NetworkSecurityRule#network_security_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#priority NetworkSecurityRule#priority}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#protocol NetworkSecurityRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#resource_group_name NetworkSecurityRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#description NetworkSecurityRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.destinationAddressPrefix">destinationAddressPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_address_prefix NetworkSecurityRule#destination_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.destinationAddressPrefixes">destinationAddressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_address_prefixes NetworkSecurityRule#destination_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.destinationApplicationSecurityGroupIds">destinationApplicationSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_application_security_group_ids NetworkSecurityRule#destination_application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.destinationPortRange">destinationPortRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_port_range NetworkSecurityRule#destination_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.destinationPortRanges">destinationPortRanges</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_port_ranges NetworkSecurityRule#destination_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#id NetworkSecurityRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.sourceAddressPrefix">sourceAddressPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_address_prefix NetworkSecurityRule#source_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.sourceAddressPrefixes">sourceAddressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_address_prefixes NetworkSecurityRule#source_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.sourceApplicationSecurityGroupIds">sourceApplicationSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_application_security_group_ids NetworkSecurityRule#source_application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.sourcePortRange">sourcePortRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_port_range NetworkSecurityRule#source_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.sourcePortRanges">sourcePortRanges</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_port_ranges NetworkSecurityRule#source_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.access"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#access NetworkSecurityRule#access}.

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#direction NetworkSecurityRule#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#name NetworkSecurityRule#name}.

---

##### `networkSecurityGroupName`<sup>Required</sup> <a name="networkSecurityGroupName" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.networkSecurityGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#network_security_group_name NetworkSecurityRule#network_security_group_name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#priority NetworkSecurityRule#priority}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#protocol NetworkSecurityRule#protocol}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#resource_group_name NetworkSecurityRule#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#description NetworkSecurityRule#description}.

---

##### `destinationAddressPrefix`<sup>Optional</sup> <a name="destinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.destinationAddressPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_address_prefix NetworkSecurityRule#destination_address_prefix}.

---

##### `destinationAddressPrefixes`<sup>Optional</sup> <a name="destinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.destinationAddressPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_address_prefixes NetworkSecurityRule#destination_address_prefixes}.

---

##### `destinationApplicationSecurityGroupIds`<sup>Optional</sup> <a name="destinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.destinationApplicationSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_application_security_group_ids NetworkSecurityRule#destination_application_security_group_ids}.

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.destinationPortRange"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_port_range NetworkSecurityRule#destination_port_range}.

---

##### `destinationPortRanges`<sup>Optional</sup> <a name="destinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.destinationPortRanges"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_port_ranges NetworkSecurityRule#destination_port_ranges}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#id NetworkSecurityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceAddressPrefix`<sup>Optional</sup> <a name="sourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.sourceAddressPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_address_prefix NetworkSecurityRule#source_address_prefix}.

---

##### `sourceAddressPrefixes`<sup>Optional</sup> <a name="sourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.sourceAddressPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_address_prefixes NetworkSecurityRule#source_address_prefixes}.

---

##### `sourceApplicationSecurityGroupIds`<sup>Optional</sup> <a name="sourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.sourceApplicationSecurityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_application_security_group_ids NetworkSecurityRule#source_application_security_group_ids}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.sourcePortRange"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_port_range NetworkSecurityRule#source_port_range}.

---

##### `sourcePortRanges`<sup>Optional</sup> <a name="sourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.sourcePortRanges"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_port_ranges NetworkSecurityRule#source_port_ranges}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#timeouts NetworkSecurityRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationAddressPrefix">resetDestinationAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationAddressPrefixes">resetDestinationAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationApplicationSecurityGroupIds">resetDestinationApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationPortRanges">resetDestinationPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourceAddressPrefix">resetSourceAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourceAddressPrefixes">resetSourceAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourceApplicationSecurityGroupIds">resetSourceApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourcePortRanges">resetSourcePortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.putTimeouts"></a>

```java
public void putTimeouts(NetworkSecurityRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestinationAddressPrefix` <a name="resetDestinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationAddressPrefix"></a>

```java
public void resetDestinationAddressPrefix()
```

##### `resetDestinationAddressPrefixes` <a name="resetDestinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationAddressPrefixes"></a>

```java
public void resetDestinationAddressPrefixes()
```

##### `resetDestinationApplicationSecurityGroupIds` <a name="resetDestinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationApplicationSecurityGroupIds"></a>

```java
public void resetDestinationApplicationSecurityGroupIds()
```

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationPortRange"></a>

```java
public void resetDestinationPortRange()
```

##### `resetDestinationPortRanges` <a name="resetDestinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetDestinationPortRanges"></a>

```java
public void resetDestinationPortRanges()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetId"></a>

```java
public void resetId()
```

##### `resetSourceAddressPrefix` <a name="resetSourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourceAddressPrefix"></a>

```java
public void resetSourceAddressPrefix()
```

##### `resetSourceAddressPrefixes` <a name="resetSourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourceAddressPrefixes"></a>

```java
public void resetSourceAddressPrefixes()
```

##### `resetSourceApplicationSecurityGroupIds` <a name="resetSourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourceApplicationSecurityGroupIds"></a>

```java
public void resetSourceApplicationSecurityGroupIds()
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourcePortRange"></a>

```java
public void resetSourcePortRange()
```

##### `resetSourcePortRanges` <a name="resetSourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetSourcePortRanges"></a>

```java
public void resetSourcePortRanges()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_security_rule.NetworkSecurityRule;

NetworkSecurityRule.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_security_rule.NetworkSecurityRule;

NetworkSecurityRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_security_rule.NetworkSecurityRule;

NetworkSecurityRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_security_rule.NetworkSecurityRule;

NetworkSecurityRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkSecurityRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkSecurityRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkSecurityRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkSecurityRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference">NetworkSecurityRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.accessInput">accessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixesInput">destinationAddressPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixInput">destinationAddressPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationApplicationSecurityGroupIdsInput">destinationApplicationSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRangesInput">destinationPortRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.networkSecurityGroupNameInput">networkSecurityGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixesInput">sourceAddressPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixInput">sourceAddressPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceApplicationSecurityGroupIdsInput">sourceApplicationSecurityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRangesInput">sourcePortRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.access">access</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefix">destinationAddressPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixes">destinationAddressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationApplicationSecurityGroupIds">destinationApplicationSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRange">destinationPortRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRanges">destinationPortRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.networkSecurityGroupName">networkSecurityGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefix">sourceAddressPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixes">sourceAddressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceApplicationSecurityGroupIds">sourceApplicationSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRange">sourcePortRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRanges">sourcePortRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.timeouts"></a>

```java
public NetworkSecurityRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference">NetworkSecurityRuleTimeoutsOutputReference</a>

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.accessInput"></a>

```java
public java.lang.String getAccessInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationAddressPrefixesInput`<sup>Optional</sup> <a name="destinationAddressPrefixesInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getDestinationAddressPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationAddressPrefixInput`<sup>Optional</sup> <a name="destinationAddressPrefixInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixInput"></a>

```java
public java.lang.String getDestinationAddressPrefixInput();
```

- *Type:* java.lang.String

---

##### `destinationApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="destinationApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationApplicationSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getDestinationApplicationSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRangeInput"></a>

```java
public java.lang.String getDestinationPortRangeInput();
```

- *Type:* java.lang.String

---

##### `destinationPortRangesInput`<sup>Optional</sup> <a name="destinationPortRangesInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRangesInput"></a>

```java
public java.util.List<java.lang.String> getDestinationPortRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupNameInput`<sup>Optional</sup> <a name="networkSecurityGroupNameInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.networkSecurityGroupNameInput"></a>

```java
public java.lang.String getNetworkSecurityGroupNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sourceAddressPrefixesInput`<sup>Optional</sup> <a name="sourceAddressPrefixesInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getSourceAddressPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceAddressPrefixInput`<sup>Optional</sup> <a name="sourceAddressPrefixInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixInput"></a>

```java
public java.lang.String getSourceAddressPrefixInput();
```

- *Type:* java.lang.String

---

##### `sourceApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="sourceApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceApplicationSecurityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSourceApplicationSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRangeInput"></a>

```java
public java.lang.String getSourcePortRangeInput();
```

- *Type:* java.lang.String

---

##### `sourcePortRangesInput`<sup>Optional</sup> <a name="sourcePortRangesInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRangesInput"></a>

```java
public java.util.List<java.lang.String> getSourcePortRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a>

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationAddressPrefix`<sup>Required</sup> <a name="destinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefix"></a>

```java
public java.lang.String getDestinationAddressPrefix();
```

- *Type:* java.lang.String

---

##### `destinationAddressPrefixes`<sup>Required</sup> <a name="destinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationAddressPrefixes"></a>

```java
public java.util.List<java.lang.String> getDestinationAddressPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationApplicationSecurityGroupIds`<sup>Required</sup> <a name="destinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationApplicationSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getDestinationApplicationSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRange"></a>

```java
public java.lang.String getDestinationPortRange();
```

- *Type:* java.lang.String

---

##### `destinationPortRanges`<sup>Required</sup> <a name="destinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.destinationPortRanges"></a>

```java
public java.util.List<java.lang.String> getDestinationPortRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupName`<sup>Required</sup> <a name="networkSecurityGroupName" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.networkSecurityGroupName"></a>

```java
public java.lang.String getNetworkSecurityGroupName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sourceAddressPrefix`<sup>Required</sup> <a name="sourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefix"></a>

```java
public java.lang.String getSourceAddressPrefix();
```

- *Type:* java.lang.String

---

##### `sourceAddressPrefixes`<sup>Required</sup> <a name="sourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceAddressPrefixes"></a>

```java
public java.util.List<java.lang.String> getSourceAddressPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceApplicationSecurityGroupIds`<sup>Required</sup> <a name="sourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourceApplicationSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSourceApplicationSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRange"></a>

```java
public java.lang.String getSourcePortRange();
```

- *Type:* java.lang.String

---

##### `sourcePortRanges`<sup>Required</sup> <a name="sourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.sourcePortRanges"></a>

```java
public java.util.List<java.lang.String> getSourcePortRanges();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityRuleConfig <a name="NetworkSecurityRuleConfig" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_security_rule.NetworkSecurityRuleConfig;

NetworkSecurityRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .access(java.lang.String)
    .direction(java.lang.String)
    .name(java.lang.String)
    .networkSecurityGroupName(java.lang.String)
    .priority(java.lang.Number)
    .protocol(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .description(java.lang.String)
//  .destinationAddressPrefix(java.lang.String)
//  .destinationAddressPrefixes(java.util.List<java.lang.String>)
//  .destinationApplicationSecurityGroupIds(java.util.List<java.lang.String>)
//  .destinationPortRange(java.lang.String)
//  .destinationPortRanges(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .sourceAddressPrefix(java.lang.String)
//  .sourceAddressPrefixes(java.util.List<java.lang.String>)
//  .sourceApplicationSecurityGroupIds(java.util.List<java.lang.String>)
//  .sourcePortRange(java.lang.String)
//  .sourcePortRanges(java.util.List<java.lang.String>)
//  .timeouts(NetworkSecurityRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.access">access</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#access NetworkSecurityRule#access}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#direction NetworkSecurityRule#direction}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#name NetworkSecurityRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.networkSecurityGroupName">networkSecurityGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#network_security_group_name NetworkSecurityRule#network_security_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#priority NetworkSecurityRule#priority}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#protocol NetworkSecurityRule#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#resource_group_name NetworkSecurityRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#description NetworkSecurityRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationAddressPrefix">destinationAddressPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_address_prefix NetworkSecurityRule#destination_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationAddressPrefixes">destinationAddressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_address_prefixes NetworkSecurityRule#destination_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationApplicationSecurityGroupIds">destinationApplicationSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_application_security_group_ids NetworkSecurityRule#destination_application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationPortRange">destinationPortRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_port_range NetworkSecurityRule#destination_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationPortRanges">destinationPortRanges</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_port_ranges NetworkSecurityRule#destination_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#id NetworkSecurityRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceAddressPrefix">sourceAddressPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_address_prefix NetworkSecurityRule#source_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceAddressPrefixes">sourceAddressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_address_prefixes NetworkSecurityRule#source_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceApplicationSecurityGroupIds">sourceApplicationSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_application_security_group_ids NetworkSecurityRule#source_application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourcePortRange">sourcePortRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_port_range NetworkSecurityRule#source_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourcePortRanges">sourcePortRanges</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_port_ranges NetworkSecurityRule#source_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.access"></a>

```java
public java.lang.String getAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#access NetworkSecurityRule#access}.

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#direction NetworkSecurityRule#direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#name NetworkSecurityRule#name}.

---

##### `networkSecurityGroupName`<sup>Required</sup> <a name="networkSecurityGroupName" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.networkSecurityGroupName"></a>

```java
public java.lang.String getNetworkSecurityGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#network_security_group_name NetworkSecurityRule#network_security_group_name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#priority NetworkSecurityRule#priority}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#protocol NetworkSecurityRule#protocol}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#resource_group_name NetworkSecurityRule#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#description NetworkSecurityRule#description}.

---

##### `destinationAddressPrefix`<sup>Optional</sup> <a name="destinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationAddressPrefix"></a>

```java
public java.lang.String getDestinationAddressPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_address_prefix NetworkSecurityRule#destination_address_prefix}.

---

##### `destinationAddressPrefixes`<sup>Optional</sup> <a name="destinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationAddressPrefixes"></a>

```java
public java.util.List<java.lang.String> getDestinationAddressPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_address_prefixes NetworkSecurityRule#destination_address_prefixes}.

---

##### `destinationApplicationSecurityGroupIds`<sup>Optional</sup> <a name="destinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationApplicationSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getDestinationApplicationSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_application_security_group_ids NetworkSecurityRule#destination_application_security_group_ids}.

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationPortRange"></a>

```java
public java.lang.String getDestinationPortRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_port_range NetworkSecurityRule#destination_port_range}.

---

##### `destinationPortRanges`<sup>Optional</sup> <a name="destinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.destinationPortRanges"></a>

```java
public java.util.List<java.lang.String> getDestinationPortRanges();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#destination_port_ranges NetworkSecurityRule#destination_port_ranges}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#id NetworkSecurityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceAddressPrefix`<sup>Optional</sup> <a name="sourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceAddressPrefix"></a>

```java
public java.lang.String getSourceAddressPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_address_prefix NetworkSecurityRule#source_address_prefix}.

---

##### `sourceAddressPrefixes`<sup>Optional</sup> <a name="sourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceAddressPrefixes"></a>

```java
public java.util.List<java.lang.String> getSourceAddressPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_address_prefixes NetworkSecurityRule#source_address_prefixes}.

---

##### `sourceApplicationSecurityGroupIds`<sup>Optional</sup> <a name="sourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourceApplicationSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSourceApplicationSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_application_security_group_ids NetworkSecurityRule#source_application_security_group_ids}.

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourcePortRange"></a>

```java
public java.lang.String getSourcePortRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_port_range NetworkSecurityRule#source_port_range}.

---

##### `sourcePortRanges`<sup>Optional</sup> <a name="sourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.sourcePortRanges"></a>

```java
public java.util.List<java.lang.String> getSourcePortRanges();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#source_port_ranges NetworkSecurityRule#source_port_ranges}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleConfig.property.timeouts"></a>

```java
public NetworkSecurityRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#timeouts NetworkSecurityRule#timeouts}

---

### NetworkSecurityRuleTimeouts <a name="NetworkSecurityRuleTimeouts" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_security_rule.NetworkSecurityRuleTimeouts;

NetworkSecurityRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#create NetworkSecurityRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#delete NetworkSecurityRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#read NetworkSecurityRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#update NetworkSecurityRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#create NetworkSecurityRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#delete NetworkSecurityRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#read NetworkSecurityRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.0.1/docs/resources/network_security_rule#update NetworkSecurityRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityRuleTimeoutsOutputReference <a name="NetworkSecurityRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.network_security_rule.NetworkSecurityRuleTimeoutsOutputReference;

new NetworkSecurityRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.networkSecurityRule.NetworkSecurityRuleTimeouts">NetworkSecurityRuleTimeouts</a>

---



