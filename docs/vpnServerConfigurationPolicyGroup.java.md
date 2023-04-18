# `azurerm_vpn_server_configuration_policy_group`

Refer to the Terraform Registory for docs: [`azurerm_vpn_server_configuration_policy_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group).

# `vpnServerConfigurationPolicyGroup` Submodule <a name="`vpnServerConfigurationPolicyGroup` Submodule" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnServerConfigurationPolicyGroup <a name="VpnServerConfigurationPolicyGroup" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group azurerm_vpn_server_configuration_policy_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_server_configuration_policy_group.VpnServerConfigurationPolicyGroup;

VpnServerConfigurationPolicyGroup.Builder.create(Construct scope, java.lang.String id)
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
    .policy(IResolvable)
    .policy(java.util.List<VpnServerConfigurationPolicyGroupPolicy>)
    .vpnServerConfigurationId(java.lang.String)
//  .id(java.lang.String)
//  .isDefault(java.lang.Boolean)
//  .isDefault(IResolvable)
//  .priority(java.lang.Number)
//  .timeouts(VpnServerConfigurationPolicyGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#name VpnServerConfigurationPolicyGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.policy">policy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>></code> | policy block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.vpnServerConfigurationId">vpnServerConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#vpn_server_configuration_id VpnServerConfigurationPolicyGroup#vpn_server_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#id VpnServerConfigurationPolicyGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#is_default VpnServerConfigurationPolicyGroup#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#priority VpnServerConfigurationPolicyGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#name VpnServerConfigurationPolicyGroup#name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.policy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#policy VpnServerConfigurationPolicyGroup#policy}

---

##### `vpnServerConfigurationId`<sup>Required</sup> <a name="vpnServerConfigurationId" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.vpnServerConfigurationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#vpn_server_configuration_id VpnServerConfigurationPolicyGroup#vpn_server_configuration_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#id VpnServerConfigurationPolicyGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.isDefault"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#is_default VpnServerConfigurationPolicyGroup#is_default}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#priority VpnServerConfigurationPolicyGroup#priority}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#timeouts VpnServerConfigurationPolicyGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetIsDefault">resetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPolicy` <a name="putPolicy" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putPolicy"></a>

```java
public void putPolicy(IResolvable OR java.util.List<VpnServerConfigurationPolicyGroupPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putTimeouts"></a>

```java
public void putTimeouts(VpnServerConfigurationPolicyGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetId"></a>

```java
public void resetId()
```

##### `resetIsDefault` <a name="resetIsDefault" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetIsDefault"></a>

```java
public void resetIsDefault()
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_server_configuration_policy_group.VpnServerConfigurationPolicyGroup;

VpnServerConfigurationPolicyGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_server_configuration_policy_group.VpnServerConfigurationPolicyGroup;

VpnServerConfigurationPolicyGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_server_configuration_policy_group.VpnServerConfigurationPolicyGroup;

VpnServerConfigurationPolicyGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList">VpnServerConfigurationPolicyGroupPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference">VpnServerConfigurationPolicyGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.isDefaultInput">isDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.policyInput">policyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.vpnServerConfigurationIdInput">vpnServerConfigurationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.vpnServerConfigurationId">vpnServerConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.policy"></a>

```java
public VpnServerConfigurationPolicyGroupPolicyList getPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList">VpnServerConfigurationPolicyGroupPolicyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.timeouts"></a>

```java
public VpnServerConfigurationPolicyGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference">VpnServerConfigurationPolicyGroupTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isDefaultInput`<sup>Optional</sup> <a name="isDefaultInput" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.isDefaultInput"></a>

```java
public java.lang.Object getIsDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.policyInput"></a>

```java
public java.lang.Object getPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `vpnServerConfigurationIdInput`<sup>Optional</sup> <a name="vpnServerConfigurationIdInput" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.vpnServerConfigurationIdInput"></a>

```java
public java.lang.String getVpnServerConfigurationIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `vpnServerConfigurationId`<sup>Required</sup> <a name="vpnServerConfigurationId" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.vpnServerConfigurationId"></a>

```java
public java.lang.String getVpnServerConfigurationId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpnServerConfigurationPolicyGroupConfig <a name="VpnServerConfigurationPolicyGroupConfig" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_server_configuration_policy_group.VpnServerConfigurationPolicyGroupConfig;

VpnServerConfigurationPolicyGroupConfig.builder()
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
    .policy(IResolvable)
    .policy(java.util.List<VpnServerConfigurationPolicyGroupPolicy>)
    .vpnServerConfigurationId(java.lang.String)
//  .id(java.lang.String)
//  .isDefault(java.lang.Boolean)
//  .isDefault(IResolvable)
//  .priority(java.lang.Number)
//  .timeouts(VpnServerConfigurationPolicyGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#name VpnServerConfigurationPolicyGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.policy">policy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>></code> | policy block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.vpnServerConfigurationId">vpnServerConfigurationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#vpn_server_configuration_id VpnServerConfigurationPolicyGroup#vpn_server_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#id VpnServerConfigurationPolicyGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.isDefault">isDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#is_default VpnServerConfigurationPolicyGroup#is_default}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#priority VpnServerConfigurationPolicyGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#name VpnServerConfigurationPolicyGroup#name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.policy"></a>

```java
public java.lang.Object getPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#policy VpnServerConfigurationPolicyGroup#policy}

---

##### `vpnServerConfigurationId`<sup>Required</sup> <a name="vpnServerConfigurationId" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.vpnServerConfigurationId"></a>

```java
public java.lang.String getVpnServerConfigurationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#vpn_server_configuration_id VpnServerConfigurationPolicyGroup#vpn_server_configuration_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#id VpnServerConfigurationPolicyGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefault`<sup>Optional</sup> <a name="isDefault" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.isDefault"></a>

```java
public java.lang.Object getIsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#is_default VpnServerConfigurationPolicyGroup#is_default}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#priority VpnServerConfigurationPolicyGroup#priority}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupConfig.property.timeouts"></a>

```java
public VpnServerConfigurationPolicyGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#timeouts VpnServerConfigurationPolicyGroup#timeouts}

---

### VpnServerConfigurationPolicyGroupPolicy <a name="VpnServerConfigurationPolicyGroupPolicy" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_server_configuration_policy_group.VpnServerConfigurationPolicyGroupPolicy;

VpnServerConfigurationPolicyGroupPolicy.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#name VpnServerConfigurationPolicyGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#type VpnServerConfigurationPolicyGroup#type}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#value VpnServerConfigurationPolicyGroup#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#name VpnServerConfigurationPolicyGroup#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#type VpnServerConfigurationPolicyGroup#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#value VpnServerConfigurationPolicyGroup#value}.

---

### VpnServerConfigurationPolicyGroupTimeouts <a name="VpnServerConfigurationPolicyGroupTimeouts" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_server_configuration_policy_group.VpnServerConfigurationPolicyGroupTimeouts;

VpnServerConfigurationPolicyGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#create VpnServerConfigurationPolicyGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#delete VpnServerConfigurationPolicyGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#read VpnServerConfigurationPolicyGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#update VpnServerConfigurationPolicyGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#create VpnServerConfigurationPolicyGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#delete VpnServerConfigurationPolicyGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#read VpnServerConfigurationPolicyGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/vpn_server_configuration_policy_group#update VpnServerConfigurationPolicyGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnServerConfigurationPolicyGroupPolicyList <a name="VpnServerConfigurationPolicyGroupPolicyList" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_server_configuration_policy_group.VpnServerConfigurationPolicyGroupPolicyList;

new VpnServerConfigurationPolicyGroupPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.get"></a>

```java
public VpnServerConfigurationPolicyGroupPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a>>

---


### VpnServerConfigurationPolicyGroupPolicyOutputReference <a name="VpnServerConfigurationPolicyGroupPolicyOutputReference" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_server_configuration_policy_group.VpnServerConfigurationPolicyGroupPolicyOutputReference;

new VpnServerConfigurationPolicyGroupPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupPolicy">VpnServerConfigurationPolicyGroupPolicy</a> OR com.hashicorp.cdktf.IResolvable

---


### VpnServerConfigurationPolicyGroupTimeoutsOutputReference <a name="VpnServerConfigurationPolicyGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.vpn_server_configuration_policy_group.VpnServerConfigurationPolicyGroupTimeoutsOutputReference;

new VpnServerConfigurationPolicyGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfigurationPolicyGroup.VpnServerConfigurationPolicyGroupTimeouts">VpnServerConfigurationPolicyGroupTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



