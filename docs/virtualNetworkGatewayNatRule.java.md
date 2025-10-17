# `virtualNetworkGatewayNatRule` Submodule <a name="`virtualNetworkGatewayNatRule` Submodule" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualNetworkGatewayNatRule <a name="VirtualNetworkGatewayNatRule" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule azurerm_virtual_network_gateway_nat_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_nat_rule.VirtualNetworkGatewayNatRule;

VirtualNetworkGatewayNatRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .externalMapping(IResolvable|java.util.List<VirtualNetworkGatewayNatRuleExternalMapping>)
    .internalMapping(IResolvable|java.util.List<VirtualNetworkGatewayNatRuleInternalMapping>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .virtualNetworkGatewayId(java.lang.String)
//  .id(java.lang.String)
//  .ipConfigurationId(java.lang.String)
//  .mode(java.lang.String)
//  .timeouts(VirtualNetworkGatewayNatRuleTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.externalMapping">externalMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>></code> | external_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.internalMapping">internalMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>></code> | internal_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#name VirtualNetworkGatewayNatRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#resource_group_name VirtualNetworkGatewayNatRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.virtualNetworkGatewayId">virtualNetworkGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#virtual_network_gateway_id VirtualNetworkGatewayNatRule#virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#id VirtualNetworkGatewayNatRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.ipConfigurationId">ipConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#ip_configuration_id VirtualNetworkGatewayNatRule#ip_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#mode VirtualNetworkGatewayNatRule#mode}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#type VirtualNetworkGatewayNatRule#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalMapping`<sup>Required</sup> <a name="externalMapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.externalMapping"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>>

external_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#external_mapping VirtualNetworkGatewayNatRule#external_mapping}

---

##### `internalMapping`<sup>Required</sup> <a name="internalMapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.internalMapping"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>>

internal_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#internal_mapping VirtualNetworkGatewayNatRule#internal_mapping}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#name VirtualNetworkGatewayNatRule#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#resource_group_name VirtualNetworkGatewayNatRule#resource_group_name}.

---

##### `virtualNetworkGatewayId`<sup>Required</sup> <a name="virtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.virtualNetworkGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#virtual_network_gateway_id VirtualNetworkGatewayNatRule#virtual_network_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#id VirtualNetworkGatewayNatRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipConfigurationId`<sup>Optional</sup> <a name="ipConfigurationId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.ipConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#ip_configuration_id VirtualNetworkGatewayNatRule#ip_configuration_id}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#mode VirtualNetworkGatewayNatRule#mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#timeouts VirtualNetworkGatewayNatRule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#type VirtualNetworkGatewayNatRule#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putExternalMapping">putExternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putInternalMapping">putInternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetIpConfigurationId">resetIpConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalMapping` <a name="putExternalMapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putExternalMapping"></a>

```java
public void putExternalMapping(IResolvable|java.util.List<VirtualNetworkGatewayNatRuleExternalMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putExternalMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>>

---

##### `putInternalMapping` <a name="putInternalMapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putInternalMapping"></a>

```java
public void putInternalMapping(IResolvable|java.util.List<VirtualNetworkGatewayNatRuleInternalMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putInternalMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putTimeouts"></a>

```java
public void putTimeouts(VirtualNetworkGatewayNatRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetId"></a>

```java
public void resetId()
```

##### `resetIpConfigurationId` <a name="resetIpConfigurationId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetIpConfigurationId"></a>

```java
public void resetIpConfigurationId()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetMode"></a>

```java
public void resetMode()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualNetworkGatewayNatRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_nat_rule.VirtualNetworkGatewayNatRule;

VirtualNetworkGatewayNatRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_nat_rule.VirtualNetworkGatewayNatRule;

VirtualNetworkGatewayNatRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_nat_rule.VirtualNetworkGatewayNatRule;

VirtualNetworkGatewayNatRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_nat_rule.VirtualNetworkGatewayNatRule;

VirtualNetworkGatewayNatRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VirtualNetworkGatewayNatRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VirtualNetworkGatewayNatRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VirtualNetworkGatewayNatRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VirtualNetworkGatewayNatRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VirtualNetworkGatewayNatRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.externalMapping">externalMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList">VirtualNetworkGatewayNatRuleExternalMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.internalMapping">internalMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList">VirtualNetworkGatewayNatRuleInternalMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference">VirtualNetworkGatewayNatRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.externalMappingInput">externalMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.internalMappingInput">internalMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.ipConfigurationIdInput">ipConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.virtualNetworkGatewayIdInput">virtualNetworkGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.ipConfigurationId">ipConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.virtualNetworkGatewayId">virtualNetworkGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalMapping`<sup>Required</sup> <a name="externalMapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.externalMapping"></a>

```java
public VirtualNetworkGatewayNatRuleExternalMappingList getExternalMapping();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList">VirtualNetworkGatewayNatRuleExternalMappingList</a>

---

##### `internalMapping`<sup>Required</sup> <a name="internalMapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.internalMapping"></a>

```java
public VirtualNetworkGatewayNatRuleInternalMappingList getInternalMapping();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList">VirtualNetworkGatewayNatRuleInternalMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.timeouts"></a>

```java
public VirtualNetworkGatewayNatRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference">VirtualNetworkGatewayNatRuleTimeoutsOutputReference</a>

---

##### `externalMappingInput`<sup>Optional</sup> <a name="externalMappingInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.externalMappingInput"></a>

```java
public IResolvable|java.util.List<VirtualNetworkGatewayNatRuleExternalMapping> getExternalMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `internalMappingInput`<sup>Optional</sup> <a name="internalMappingInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.internalMappingInput"></a>

```java
public IResolvable|java.util.List<VirtualNetworkGatewayNatRuleInternalMapping> getInternalMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>>

---

##### `ipConfigurationIdInput`<sup>Optional</sup> <a name="ipConfigurationIdInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.ipConfigurationIdInput"></a>

```java
public java.lang.String getIpConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.timeoutsInput"></a>

```java
public IResolvable|VirtualNetworkGatewayNatRuleTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkGatewayIdInput`<sup>Optional</sup> <a name="virtualNetworkGatewayIdInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.virtualNetworkGatewayIdInput"></a>

```java
public java.lang.String getVirtualNetworkGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipConfigurationId`<sup>Required</sup> <a name="ipConfigurationId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.ipConfigurationId"></a>

```java
public java.lang.String getIpConfigurationId();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `virtualNetworkGatewayId`<sup>Required</sup> <a name="virtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.virtualNetworkGatewayId"></a>

```java
public java.lang.String getVirtualNetworkGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualNetworkGatewayNatRuleConfig <a name="VirtualNetworkGatewayNatRuleConfig" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_nat_rule.VirtualNetworkGatewayNatRuleConfig;

VirtualNetworkGatewayNatRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .externalMapping(IResolvable|java.util.List<VirtualNetworkGatewayNatRuleExternalMapping>)
    .internalMapping(IResolvable|java.util.List<VirtualNetworkGatewayNatRuleInternalMapping>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .virtualNetworkGatewayId(java.lang.String)
//  .id(java.lang.String)
//  .ipConfigurationId(java.lang.String)
//  .mode(java.lang.String)
//  .timeouts(VirtualNetworkGatewayNatRuleTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.externalMapping">externalMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>></code> | external_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.internalMapping">internalMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>></code> | internal_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#name VirtualNetworkGatewayNatRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#resource_group_name VirtualNetworkGatewayNatRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.virtualNetworkGatewayId">virtualNetworkGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#virtual_network_gateway_id VirtualNetworkGatewayNatRule#virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#id VirtualNetworkGatewayNatRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.ipConfigurationId">ipConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#ip_configuration_id VirtualNetworkGatewayNatRule#ip_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#mode VirtualNetworkGatewayNatRule#mode}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#type VirtualNetworkGatewayNatRule#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalMapping`<sup>Required</sup> <a name="externalMapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.externalMapping"></a>

```java
public IResolvable|java.util.List<VirtualNetworkGatewayNatRuleExternalMapping> getExternalMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>>

external_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#external_mapping VirtualNetworkGatewayNatRule#external_mapping}

---

##### `internalMapping`<sup>Required</sup> <a name="internalMapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.internalMapping"></a>

```java
public IResolvable|java.util.List<VirtualNetworkGatewayNatRuleInternalMapping> getInternalMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>>

internal_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#internal_mapping VirtualNetworkGatewayNatRule#internal_mapping}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#name VirtualNetworkGatewayNatRule#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#resource_group_name VirtualNetworkGatewayNatRule#resource_group_name}.

---

##### `virtualNetworkGatewayId`<sup>Required</sup> <a name="virtualNetworkGatewayId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.virtualNetworkGatewayId"></a>

```java
public java.lang.String getVirtualNetworkGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#virtual_network_gateway_id VirtualNetworkGatewayNatRule#virtual_network_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#id VirtualNetworkGatewayNatRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipConfigurationId`<sup>Optional</sup> <a name="ipConfigurationId" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.ipConfigurationId"></a>

```java
public java.lang.String getIpConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#ip_configuration_id VirtualNetworkGatewayNatRule#ip_configuration_id}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#mode VirtualNetworkGatewayNatRule#mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.timeouts"></a>

```java
public VirtualNetworkGatewayNatRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#timeouts VirtualNetworkGatewayNatRule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#type VirtualNetworkGatewayNatRule#type}.

---

### VirtualNetworkGatewayNatRuleExternalMapping <a name="VirtualNetworkGatewayNatRuleExternalMapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_nat_rule.VirtualNetworkGatewayNatRuleExternalMapping;

VirtualNetworkGatewayNatRuleExternalMapping.builder()
    .addressSpace(java.lang.String)
//  .portRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.property.addressSpace">addressSpace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#address_space VirtualNetworkGatewayNatRule#address_space}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.property.portRange">portRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#port_range VirtualNetworkGatewayNatRule#port_range}. |

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.property.addressSpace"></a>

```java
public java.lang.String getAddressSpace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#address_space VirtualNetworkGatewayNatRule#address_space}.

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.property.portRange"></a>

```java
public java.lang.String getPortRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#port_range VirtualNetworkGatewayNatRule#port_range}.

---

### VirtualNetworkGatewayNatRuleInternalMapping <a name="VirtualNetworkGatewayNatRuleInternalMapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_nat_rule.VirtualNetworkGatewayNatRuleInternalMapping;

VirtualNetworkGatewayNatRuleInternalMapping.builder()
    .addressSpace(java.lang.String)
//  .portRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.property.addressSpace">addressSpace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#address_space VirtualNetworkGatewayNatRule#address_space}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.property.portRange">portRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#port_range VirtualNetworkGatewayNatRule#port_range}. |

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.property.addressSpace"></a>

```java
public java.lang.String getAddressSpace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#address_space VirtualNetworkGatewayNatRule#address_space}.

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.property.portRange"></a>

```java
public java.lang.String getPortRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#port_range VirtualNetworkGatewayNatRule#port_range}.

---

### VirtualNetworkGatewayNatRuleTimeouts <a name="VirtualNetworkGatewayNatRuleTimeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_nat_rule.VirtualNetworkGatewayNatRuleTimeouts;

VirtualNetworkGatewayNatRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#create VirtualNetworkGatewayNatRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#delete VirtualNetworkGatewayNatRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#read VirtualNetworkGatewayNatRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#update VirtualNetworkGatewayNatRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#create VirtualNetworkGatewayNatRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#delete VirtualNetworkGatewayNatRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#read VirtualNetworkGatewayNatRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/virtual_network_gateway_nat_rule#update VirtualNetworkGatewayNatRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualNetworkGatewayNatRuleExternalMappingList <a name="VirtualNetworkGatewayNatRuleExternalMappingList" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_nat_rule.VirtualNetworkGatewayNatRuleExternalMappingList;

new VirtualNetworkGatewayNatRuleExternalMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.get"></a>

```java
public VirtualNetworkGatewayNatRuleExternalMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VirtualNetworkGatewayNatRuleExternalMapping> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>>

---


### VirtualNetworkGatewayNatRuleExternalMappingOutputReference <a name="VirtualNetworkGatewayNatRuleExternalMappingOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_nat_rule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference;

new VirtualNetworkGatewayNatRuleExternalMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resetPortRange"></a>

```java
public void resetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.addressSpaceInput">addressSpaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.portRangeInput">portRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.addressSpace">addressSpace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.portRange">portRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressSpaceInput`<sup>Optional</sup> <a name="addressSpaceInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.addressSpaceInput"></a>

```java
public java.lang.String getAddressSpaceInput();
```

- *Type:* java.lang.String

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.portRangeInput"></a>

```java
public java.lang.String getPortRangeInput();
```

- *Type:* java.lang.String

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.addressSpace"></a>

```java
public java.lang.String getAddressSpace();
```

- *Type:* java.lang.String

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.portRange"></a>

```java
public java.lang.String getPortRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.internalValue"></a>

```java
public IResolvable|VirtualNetworkGatewayNatRuleExternalMapping getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>

---


### VirtualNetworkGatewayNatRuleInternalMappingList <a name="VirtualNetworkGatewayNatRuleInternalMappingList" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_nat_rule.VirtualNetworkGatewayNatRuleInternalMappingList;

new VirtualNetworkGatewayNatRuleInternalMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.get"></a>

```java
public VirtualNetworkGatewayNatRuleInternalMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VirtualNetworkGatewayNatRuleInternalMapping> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>>

---


### VirtualNetworkGatewayNatRuleInternalMappingOutputReference <a name="VirtualNetworkGatewayNatRuleInternalMappingOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_nat_rule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference;

new VirtualNetworkGatewayNatRuleInternalMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resetPortRange"></a>

```java
public void resetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.addressSpaceInput">addressSpaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.portRangeInput">portRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.addressSpace">addressSpace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.portRange">portRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressSpaceInput`<sup>Optional</sup> <a name="addressSpaceInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.addressSpaceInput"></a>

```java
public java.lang.String getAddressSpaceInput();
```

- *Type:* java.lang.String

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.portRangeInput"></a>

```java
public java.lang.String getPortRangeInput();
```

- *Type:* java.lang.String

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.addressSpace"></a>

```java
public java.lang.String getAddressSpace();
```

- *Type:* java.lang.String

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.portRange"></a>

```java
public java.lang.String getPortRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.internalValue"></a>

```java
public IResolvable|VirtualNetworkGatewayNatRuleInternalMapping getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>

---


### VirtualNetworkGatewayNatRuleTimeoutsOutputReference <a name="VirtualNetworkGatewayNatRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.virtual_network_gateway_nat_rule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference;

new VirtualNetworkGatewayNatRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VirtualNetworkGatewayNatRuleTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>

---



