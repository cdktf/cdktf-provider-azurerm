# `dataAzurermVpnServerConfiguration` Submodule <a name="`dataAzurermVpnServerConfiguration` Submodule" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVpnServerConfiguration <a name="DataAzurermVpnServerConfiguration" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration azurerm_vpn_server_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfiguration;

DataAzurermVpnServerConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermVpnServerConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#name DataAzurermVpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#resource_group_name DataAzurermVpnServerConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#id DataAzurermVpnServerConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#name DataAzurermVpnServerConfiguration#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#resource_group_name DataAzurermVpnServerConfiguration#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#id DataAzurermVpnServerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#timeouts DataAzurermVpnServerConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermVpnServerConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermVpnServerConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfiguration;

DataAzurermVpnServerConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfiguration;

DataAzurermVpnServerConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfiguration;

DataAzurermVpnServerConfiguration.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfiguration;

DataAzurermVpnServerConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermVpnServerConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermVpnServerConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermVpnServerConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermVpnServerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermVpnServerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.azureActiveDirectoryAuthentication">azureActiveDirectoryAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRevokedCertificate">clientRevokedCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList">DataAzurermVpnServerConfigurationClientRevokedCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRootCertificate">clientRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList">DataAzurermVpnServerConfigurationClientRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.ipsecPolicy">ipsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList">DataAzurermVpnServerConfigurationIpsecPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.radius">radius</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList">DataAzurermVpnServerConfigurationRadiusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference">DataAzurermVpnServerConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnAuthenticationTypes">vpnAuthenticationTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnProtocols">vpnProtocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `azureActiveDirectoryAuthentication`<sup>Required</sup> <a name="azureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.azureActiveDirectoryAuthentication"></a>

```java
public DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList getAzureActiveDirectoryAuthentication();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList</a>

---

##### `clientRevokedCertificate`<sup>Required</sup> <a name="clientRevokedCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRevokedCertificate"></a>

```java
public DataAzurermVpnServerConfigurationClientRevokedCertificateList getClientRevokedCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList">DataAzurermVpnServerConfigurationClientRevokedCertificateList</a>

---

##### `clientRootCertificate`<sup>Required</sup> <a name="clientRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRootCertificate"></a>

```java
public DataAzurermVpnServerConfigurationClientRootCertificateList getClientRootCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList">DataAzurermVpnServerConfigurationClientRootCertificateList</a>

---

##### `ipsecPolicy`<sup>Required</sup> <a name="ipsecPolicy" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.ipsecPolicy"></a>

```java
public DataAzurermVpnServerConfigurationIpsecPolicyList getIpsecPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList">DataAzurermVpnServerConfigurationIpsecPolicyList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `radius`<sup>Required</sup> <a name="radius" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.radius"></a>

```java
public DataAzurermVpnServerConfigurationRadiusList getRadius();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList">DataAzurermVpnServerConfigurationRadiusList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeouts"></a>

```java
public DataAzurermVpnServerConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference">DataAzurermVpnServerConfigurationTimeoutsOutputReference</a>

---

##### `vpnAuthenticationTypes`<sup>Required</sup> <a name="vpnAuthenticationTypes" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnAuthenticationTypes"></a>

```java
public java.util.List<java.lang.String> getVpnAuthenticationTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpnProtocols`<sup>Required</sup> <a name="vpnProtocols" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnProtocols"></a>

```java
public java.util.List<java.lang.String> getVpnProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication <a name="DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication;

DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication.builder()
    .build();
```


### DataAzurermVpnServerConfigurationClientRevokedCertificate <a name="DataAzurermVpnServerConfigurationClientRevokedCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationClientRevokedCertificate;

DataAzurermVpnServerConfigurationClientRevokedCertificate.builder()
    .build();
```


### DataAzurermVpnServerConfigurationClientRootCertificate <a name="DataAzurermVpnServerConfigurationClientRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationClientRootCertificate;

DataAzurermVpnServerConfigurationClientRootCertificate.builder()
    .build();
```


### DataAzurermVpnServerConfigurationConfig <a name="DataAzurermVpnServerConfigurationConfig" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationConfig;

DataAzurermVpnServerConfigurationConfig.builder()
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
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermVpnServerConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#name DataAzurermVpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#resource_group_name DataAzurermVpnServerConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#id DataAzurermVpnServerConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#name DataAzurermVpnServerConfiguration#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#resource_group_name DataAzurermVpnServerConfiguration#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#id DataAzurermVpnServerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.timeouts"></a>

```java
public DataAzurermVpnServerConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#timeouts DataAzurermVpnServerConfiguration#timeouts}

---

### DataAzurermVpnServerConfigurationIpsecPolicy <a name="DataAzurermVpnServerConfigurationIpsecPolicy" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationIpsecPolicy;

DataAzurermVpnServerConfigurationIpsecPolicy.builder()
    .build();
```


### DataAzurermVpnServerConfigurationRadius <a name="DataAzurermVpnServerConfigurationRadius" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationRadius;

DataAzurermVpnServerConfigurationRadius.builder()
    .build();
```


### DataAzurermVpnServerConfigurationRadiusClientRootCertificate <a name="DataAzurermVpnServerConfigurationRadiusClientRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate;

DataAzurermVpnServerConfigurationRadiusClientRootCertificate.builder()
    .build();
```


### DataAzurermVpnServerConfigurationRadiusServer <a name="DataAzurermVpnServerConfigurationRadiusServer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationRadiusServer;

DataAzurermVpnServerConfigurationRadiusServer.builder()
    .build();
```


### DataAzurermVpnServerConfigurationRadiusServerRootCertificate <a name="DataAzurermVpnServerConfigurationRadiusServerRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate;

DataAzurermVpnServerConfigurationRadiusServerRootCertificate.builder()
    .build();
```


### DataAzurermVpnServerConfigurationTimeouts <a name="DataAzurermVpnServerConfigurationTimeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationTimeouts;

DataAzurermVpnServerConfigurationTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#read DataAzurermVpnServerConfiguration#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/vpn_server_configuration#read DataAzurermVpnServerConfiguration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList <a name="DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList;

new DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.get"></a>

```java
public DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference <a name="DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference;

new DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenant">tenant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenant"></a>

```java
public java.lang.String getTenant();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.internalValue"></a>

```java
public DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication</a>

---


### DataAzurermVpnServerConfigurationClientRevokedCertificateList <a name="DataAzurermVpnServerConfigurationClientRevokedCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationClientRevokedCertificateList;

new DataAzurermVpnServerConfigurationClientRevokedCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.get"></a>

```java
public DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference <a name="DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference;

new DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate">DataAzurermVpnServerConfigurationClientRevokedCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.internalValue"></a>

```java
public DataAzurermVpnServerConfigurationClientRevokedCertificate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate">DataAzurermVpnServerConfigurationClientRevokedCertificate</a>

---


### DataAzurermVpnServerConfigurationClientRootCertificateList <a name="DataAzurermVpnServerConfigurationClientRootCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationClientRootCertificateList;

new DataAzurermVpnServerConfigurationClientRootCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.get"></a>

```java
public DataAzurermVpnServerConfigurationClientRootCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermVpnServerConfigurationClientRootCertificateOutputReference <a name="DataAzurermVpnServerConfigurationClientRootCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference;

new DataAzurermVpnServerConfigurationClientRootCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.publicCertData">publicCertData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate">DataAzurermVpnServerConfigurationClientRootCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicCertData`<sup>Required</sup> <a name="publicCertData" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.publicCertData"></a>

```java
public java.lang.String getPublicCertData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.internalValue"></a>

```java
public DataAzurermVpnServerConfigurationClientRootCertificate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate">DataAzurermVpnServerConfigurationClientRootCertificate</a>

---


### DataAzurermVpnServerConfigurationIpsecPolicyList <a name="DataAzurermVpnServerConfigurationIpsecPolicyList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationIpsecPolicyList;

new DataAzurermVpnServerConfigurationIpsecPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.get"></a>

```java
public DataAzurermVpnServerConfigurationIpsecPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermVpnServerConfigurationIpsecPolicyOutputReference <a name="DataAzurermVpnServerConfigurationIpsecPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference;

new DataAzurermVpnServerConfigurationIpsecPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.dhGroup">dhGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryption">ikeEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrity">ikeIntegrity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryption">ipsecEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrity">ipsecIntegrity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroup">pfsGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytes">saDataSizeKilobytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSeconds">saLifetimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy">DataAzurermVpnServerConfigurationIpsecPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dhGroup`<sup>Required</sup> <a name="dhGroup" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.dhGroup"></a>

```java
public java.lang.String getDhGroup();
```

- *Type:* java.lang.String

---

##### `ikeEncryption`<sup>Required</sup> <a name="ikeEncryption" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryption"></a>

```java
public java.lang.String getIkeEncryption();
```

- *Type:* java.lang.String

---

##### `ikeIntegrity`<sup>Required</sup> <a name="ikeIntegrity" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```java
public java.lang.String getIkeIntegrity();
```

- *Type:* java.lang.String

---

##### `ipsecEncryption`<sup>Required</sup> <a name="ipsecEncryption" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```java
public java.lang.String getIpsecEncryption();
```

- *Type:* java.lang.String

---

##### `ipsecIntegrity`<sup>Required</sup> <a name="ipsecIntegrity" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```java
public java.lang.String getIpsecIntegrity();
```

- *Type:* java.lang.String

---

##### `pfsGroup`<sup>Required</sup> <a name="pfsGroup" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroup"></a>

```java
public java.lang.String getPfsGroup();
```

- *Type:* java.lang.String

---

##### `saDataSizeKilobytes`<sup>Required</sup> <a name="saDataSizeKilobytes" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytes"></a>

```java
public java.lang.Number getSaDataSizeKilobytes();
```

- *Type:* java.lang.Number

---

##### `saLifetimeSeconds`<sup>Required</sup> <a name="saLifetimeSeconds" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSeconds"></a>

```java
public java.lang.Number getSaLifetimeSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.internalValue"></a>

```java
public DataAzurermVpnServerConfigurationIpsecPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy">DataAzurermVpnServerConfigurationIpsecPolicy</a>

---


### DataAzurermVpnServerConfigurationRadiusClientRootCertificateList <a name="DataAzurermVpnServerConfigurationRadiusClientRootCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList;

new DataAzurermVpnServerConfigurationRadiusClientRootCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.get"></a>

```java
public DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference <a name="DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference;

new DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate">DataAzurermVpnServerConfigurationRadiusClientRootCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprint"></a>

```java
public java.lang.String getThumbprint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.internalValue"></a>

```java
public DataAzurermVpnServerConfigurationRadiusClientRootCertificate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate">DataAzurermVpnServerConfigurationRadiusClientRootCertificate</a>

---


### DataAzurermVpnServerConfigurationRadiusList <a name="DataAzurermVpnServerConfigurationRadiusList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationRadiusList;

new DataAzurermVpnServerConfigurationRadiusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.get"></a>

```java
public DataAzurermVpnServerConfigurationRadiusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermVpnServerConfigurationRadiusOutputReference <a name="DataAzurermVpnServerConfigurationRadiusOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationRadiusOutputReference;

new DataAzurermVpnServerConfigurationRadiusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.clientRootCertificate">clientRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList">DataAzurermVpnServerConfigurationRadiusClientRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.server">server</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList">DataAzurermVpnServerConfigurationRadiusServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.serverRootCertificate">serverRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList">DataAzurermVpnServerConfigurationRadiusServerRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius">DataAzurermVpnServerConfigurationRadius</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientRootCertificate`<sup>Required</sup> <a name="clientRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.clientRootCertificate"></a>

```java
public DataAzurermVpnServerConfigurationRadiusClientRootCertificateList getClientRootCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList">DataAzurermVpnServerConfigurationRadiusClientRootCertificateList</a>

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.server"></a>

```java
public DataAzurermVpnServerConfigurationRadiusServerList getServer();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList">DataAzurermVpnServerConfigurationRadiusServerList</a>

---

##### `serverRootCertificate`<sup>Required</sup> <a name="serverRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.serverRootCertificate"></a>

```java
public DataAzurermVpnServerConfigurationRadiusServerRootCertificateList getServerRootCertificate();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList">DataAzurermVpnServerConfigurationRadiusServerRootCertificateList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.internalValue"></a>

```java
public DataAzurermVpnServerConfigurationRadius getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius">DataAzurermVpnServerConfigurationRadius</a>

---


### DataAzurermVpnServerConfigurationRadiusServerList <a name="DataAzurermVpnServerConfigurationRadiusServerList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationRadiusServerList;

new DataAzurermVpnServerConfigurationRadiusServerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.get"></a>

```java
public DataAzurermVpnServerConfigurationRadiusServerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermVpnServerConfigurationRadiusServerOutputReference <a name="DataAzurermVpnServerConfigurationRadiusServerOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationRadiusServerOutputReference;

new DataAzurermVpnServerConfigurationRadiusServerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.score">score</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer">DataAzurermVpnServerConfigurationRadiusServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.score"></a>

```java
public java.lang.Number getScore();
```

- *Type:* java.lang.Number

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.internalValue"></a>

```java
public DataAzurermVpnServerConfigurationRadiusServer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer">DataAzurermVpnServerConfigurationRadiusServer</a>

---


### DataAzurermVpnServerConfigurationRadiusServerRootCertificateList <a name="DataAzurermVpnServerConfigurationRadiusServerRootCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList;

new DataAzurermVpnServerConfigurationRadiusServerRootCertificateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.get"></a>

```java
public DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference <a name="DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference;

new DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertData">publicCertData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate">DataAzurermVpnServerConfigurationRadiusServerRootCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicCertData`<sup>Required</sup> <a name="publicCertData" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertData"></a>

```java
public java.lang.String getPublicCertData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.internalValue"></a>

```java
public DataAzurermVpnServerConfigurationRadiusServerRootCertificate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate">DataAzurermVpnServerConfigurationRadiusServerRootCertificate</a>

---


### DataAzurermVpnServerConfigurationTimeoutsOutputReference <a name="DataAzurermVpnServerConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_vpn_server_configuration.DataAzurermVpnServerConfigurationTimeoutsOutputReference;

new DataAzurermVpnServerConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>

---



