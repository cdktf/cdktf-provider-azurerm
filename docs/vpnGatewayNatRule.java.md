# `vpnGatewayNatRule` Submodule <a name="`vpnGatewayNatRule` Submodule" id="@cdktf/provider-azurerm.vpnGatewayNatRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnGatewayNatRule <a name="VpnGatewayNatRule" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule azurerm_vpn_gateway_nat_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_gateway_nat_rule.VpnGatewayNatRule;

VpnGatewayNatRule.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .vpnGatewayId(java.lang.String)
//  .externalMapping(IResolvable)
//  .externalMapping(java.util.List<VpnGatewayNatRuleExternalMapping>)
//  .id(java.lang.String)
//  .internalMapping(IResolvable)
//  .internalMapping(java.util.List<VpnGatewayNatRuleInternalMapping>)
//  .ipConfigurationId(java.lang.String)
//  .mode(java.lang.String)
//  .timeouts(VpnGatewayNatRuleTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#name VpnGatewayNatRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.vpnGatewayId">vpnGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#vpn_gateway_id VpnGatewayNatRule#vpn_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.externalMapping">externalMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>></code> | external_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#id VpnGatewayNatRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.internalMapping">internalMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>></code> | internal_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.ipConfigurationId">ipConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#ip_configuration_id VpnGatewayNatRule#ip_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#mode VpnGatewayNatRule#mode}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#type VpnGatewayNatRule#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#name VpnGatewayNatRule#name}.

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.vpnGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#vpn_gateway_id VpnGatewayNatRule#vpn_gateway_id}.

---

##### `externalMapping`<sup>Optional</sup> <a name="externalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.externalMapping"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>>

external_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#external_mapping VpnGatewayNatRule#external_mapping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#id VpnGatewayNatRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalMapping`<sup>Optional</sup> <a name="internalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.internalMapping"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>>

internal_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#internal_mapping VpnGatewayNatRule#internal_mapping}

---

##### `ipConfigurationId`<sup>Optional</sup> <a name="ipConfigurationId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.ipConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#ip_configuration_id VpnGatewayNatRule#ip_configuration_id}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#mode VpnGatewayNatRule#mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#timeouts VpnGatewayNatRule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#type VpnGatewayNatRule#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putExternalMapping">putExternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putInternalMapping">putInternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetExternalMapping">resetExternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetInternalMapping">resetInternalMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetIpConfigurationId">resetIpConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalMapping` <a name="putExternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putExternalMapping"></a>

```java
public void putExternalMapping(IResolvable OR java.util.List<VpnGatewayNatRuleExternalMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putExternalMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>>

---

##### `putInternalMapping` <a name="putInternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putInternalMapping"></a>

```java
public void putInternalMapping(IResolvable OR java.util.List<VpnGatewayNatRuleInternalMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putInternalMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putTimeouts"></a>

```java
public void putTimeouts(VpnGatewayNatRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a>

---

##### `resetExternalMapping` <a name="resetExternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetExternalMapping"></a>

```java
public void resetExternalMapping()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetId"></a>

```java
public void resetId()
```

##### `resetInternalMapping` <a name="resetInternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetInternalMapping"></a>

```java
public void resetInternalMapping()
```

##### `resetIpConfigurationId` <a name="resetIpConfigurationId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetIpConfigurationId"></a>

```java
public void resetIpConfigurationId()
```

##### `resetMode` <a name="resetMode" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetMode"></a>

```java
public void resetMode()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpnGatewayNatRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_gateway_nat_rule.VpnGatewayNatRule;

VpnGatewayNatRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_gateway_nat_rule.VpnGatewayNatRule;

VpnGatewayNatRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_gateway_nat_rule.VpnGatewayNatRule;

VpnGatewayNatRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_gateway_nat_rule.VpnGatewayNatRule;

VpnGatewayNatRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpnGatewayNatRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VpnGatewayNatRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpnGatewayNatRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpnGatewayNatRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VpnGatewayNatRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMapping">externalMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList">VpnGatewayNatRuleExternalMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMapping">internalMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList">VpnGatewayNatRuleInternalMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference">VpnGatewayNatRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMappingInput">externalMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMappingInput">internalMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationIdInput">ipConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayIdInput">vpnGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationId">ipConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayId">vpnGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `externalMapping`<sup>Required</sup> <a name="externalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMapping"></a>

```java
public VpnGatewayNatRuleExternalMappingList getExternalMapping();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList">VpnGatewayNatRuleExternalMappingList</a>

---

##### `internalMapping`<sup>Required</sup> <a name="internalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMapping"></a>

```java
public VpnGatewayNatRuleInternalMappingList getInternalMapping();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList">VpnGatewayNatRuleInternalMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeouts"></a>

```java
public VpnGatewayNatRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference">VpnGatewayNatRuleTimeoutsOutputReference</a>

---

##### `externalMappingInput`<sup>Optional</sup> <a name="externalMappingInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.externalMappingInput"></a>

```java
public java.lang.Object getExternalMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `internalMappingInput`<sup>Optional</sup> <a name="internalMappingInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.internalMappingInput"></a>

```java
public java.lang.Object getInternalMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>>

---

##### `ipConfigurationIdInput`<sup>Optional</sup> <a name="ipConfigurationIdInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationIdInput"></a>

```java
public java.lang.String getIpConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpnGatewayIdInput`<sup>Optional</sup> <a name="vpnGatewayIdInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayIdInput"></a>

```java
public java.lang.String getVpnGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipConfigurationId`<sup>Required</sup> <a name="ipConfigurationId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.ipConfigurationId"></a>

```java
public java.lang.String getIpConfigurationId();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.vpnGatewayId"></a>

```java
public java.lang.String getVpnGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpnGatewayNatRuleConfig <a name="VpnGatewayNatRuleConfig" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_gateway_nat_rule.VpnGatewayNatRuleConfig;

VpnGatewayNatRuleConfig.builder()
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
    .name(java.lang.String)
    .vpnGatewayId(java.lang.String)
//  .externalMapping(IResolvable)
//  .externalMapping(java.util.List<VpnGatewayNatRuleExternalMapping>)
//  .id(java.lang.String)
//  .internalMapping(IResolvable)
//  .internalMapping(java.util.List<VpnGatewayNatRuleInternalMapping>)
//  .ipConfigurationId(java.lang.String)
//  .mode(java.lang.String)
//  .timeouts(VpnGatewayNatRuleTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#name VpnGatewayNatRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.vpnGatewayId">vpnGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#vpn_gateway_id VpnGatewayNatRule#vpn_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.externalMapping">externalMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>></code> | external_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#id VpnGatewayNatRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.internalMapping">internalMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>></code> | internal_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.ipConfigurationId">ipConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#ip_configuration_id VpnGatewayNatRule#ip_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#mode VpnGatewayNatRule#mode}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#type VpnGatewayNatRule#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#name VpnGatewayNatRule#name}.

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.vpnGatewayId"></a>

```java
public java.lang.String getVpnGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#vpn_gateway_id VpnGatewayNatRule#vpn_gateway_id}.

---

##### `externalMapping`<sup>Optional</sup> <a name="externalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.externalMapping"></a>

```java
public java.lang.Object getExternalMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>>

external_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#external_mapping VpnGatewayNatRule#external_mapping}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#id VpnGatewayNatRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalMapping`<sup>Optional</sup> <a name="internalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.internalMapping"></a>

```java
public java.lang.Object getInternalMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>>

internal_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#internal_mapping VpnGatewayNatRule#internal_mapping}

---

##### `ipConfigurationId`<sup>Optional</sup> <a name="ipConfigurationId" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.ipConfigurationId"></a>

```java
public java.lang.String getIpConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#ip_configuration_id VpnGatewayNatRule#ip_configuration_id}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#mode VpnGatewayNatRule#mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.timeouts"></a>

```java
public VpnGatewayNatRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#timeouts VpnGatewayNatRule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#type VpnGatewayNatRule#type}.

---

### VpnGatewayNatRuleExternalMapping <a name="VpnGatewayNatRuleExternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_gateway_nat_rule.VpnGatewayNatRuleExternalMapping;

VpnGatewayNatRuleExternalMapping.builder()
    .addressSpace(java.lang.String)
//  .portRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.addressSpace">addressSpace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.portRange">portRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}. |

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.addressSpace"></a>

```java
public java.lang.String getAddressSpace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}.

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping.property.portRange"></a>

```java
public java.lang.String getPortRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}.

---

### VpnGatewayNatRuleInternalMapping <a name="VpnGatewayNatRuleInternalMapping" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_gateway_nat_rule.VpnGatewayNatRuleInternalMapping;

VpnGatewayNatRuleInternalMapping.builder()
    .addressSpace(java.lang.String)
//  .portRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.addressSpace">addressSpace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.portRange">portRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}. |

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.addressSpace"></a>

```java
public java.lang.String getAddressSpace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#address_space VpnGatewayNatRule#address_space}.

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping.property.portRange"></a>

```java
public java.lang.String getPortRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#port_range VpnGatewayNatRule#port_range}.

---

### VpnGatewayNatRuleTimeouts <a name="VpnGatewayNatRuleTimeouts" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_gateway_nat_rule.VpnGatewayNatRuleTimeouts;

VpnGatewayNatRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#create VpnGatewayNatRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#delete VpnGatewayNatRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#read VpnGatewayNatRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#update VpnGatewayNatRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#create VpnGatewayNatRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#delete VpnGatewayNatRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#read VpnGatewayNatRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/vpn_gateway_nat_rule#update VpnGatewayNatRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnGatewayNatRuleExternalMappingList <a name="VpnGatewayNatRuleExternalMappingList" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_gateway_nat_rule.VpnGatewayNatRuleExternalMappingList;

new VpnGatewayNatRuleExternalMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.get"></a>

```java
public VpnGatewayNatRuleExternalMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>>

---


### VpnGatewayNatRuleExternalMappingOutputReference <a name="VpnGatewayNatRuleExternalMappingOutputReference" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_gateway_nat_rule.VpnGatewayNatRuleExternalMappingOutputReference;

new VpnGatewayNatRuleExternalMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.resetPortRange"></a>

```java
public void resetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpaceInput">addressSpaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRangeInput">portRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpace">addressSpace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRange">portRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressSpaceInput`<sup>Optional</sup> <a name="addressSpaceInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpaceInput"></a>

```java
public java.lang.String getAddressSpaceInput();
```

- *Type:* java.lang.String

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRangeInput"></a>

```java
public java.lang.String getPortRangeInput();
```

- *Type:* java.lang.String

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.addressSpace"></a>

```java
public java.lang.String getAddressSpace();
```

- *Type:* java.lang.String

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.portRange"></a>

```java
public java.lang.String getPortRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleExternalMapping">VpnGatewayNatRuleExternalMapping</a>

---


### VpnGatewayNatRuleInternalMappingList <a name="VpnGatewayNatRuleInternalMappingList" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_gateway_nat_rule.VpnGatewayNatRuleInternalMappingList;

new VpnGatewayNatRuleInternalMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.get"></a>

```java
public VpnGatewayNatRuleInternalMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>>

---


### VpnGatewayNatRuleInternalMappingOutputReference <a name="VpnGatewayNatRuleInternalMappingOutputReference" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_gateway_nat_rule.VpnGatewayNatRuleInternalMappingOutputReference;

new VpnGatewayNatRuleInternalMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPortRange` <a name="resetPortRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.resetPortRange"></a>

```java
public void resetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpaceInput">addressSpaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRangeInput">portRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpace">addressSpace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRange">portRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressSpaceInput`<sup>Optional</sup> <a name="addressSpaceInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpaceInput"></a>

```java
public java.lang.String getAddressSpaceInput();
```

- *Type:* java.lang.String

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRangeInput"></a>

```java
public java.lang.String getPortRangeInput();
```

- *Type:* java.lang.String

---

##### `addressSpace`<sup>Required</sup> <a name="addressSpace" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.addressSpace"></a>

```java
public java.lang.String getAddressSpace();
```

- *Type:* java.lang.String

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.portRange"></a>

```java
public java.lang.String getPortRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleInternalMapping">VpnGatewayNatRuleInternalMapping</a>

---


### VpnGatewayNatRuleTimeoutsOutputReference <a name="VpnGatewayNatRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_gateway_nat_rule.VpnGatewayNatRuleTimeoutsOutputReference;

new VpnGatewayNatRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.vpnGatewayNatRule.VpnGatewayNatRuleTimeouts">VpnGatewayNatRuleTimeouts</a>

---



