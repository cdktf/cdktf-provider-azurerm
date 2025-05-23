# `dataAzurermNetappVolumeGroupOracle` Submodule <a name="`dataAzurermNetappVolumeGroupOracle` Submodule" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappVolumeGroupOracle <a name="DataAzurermNetappVolumeGroupOracle" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle azurerm_netapp_volume_group_oracle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracle;

DataAzurermNetappVolumeGroupOracle.Builder.create(Construct scope, java.lang.String id)
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
    .accountName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermNetappVolumeGroupOracleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#account_name DataAzurermNetappVolumeGroupOracle#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#name DataAzurermNetappVolumeGroupOracle#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#resource_group_name DataAzurermNetappVolumeGroupOracle#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#id DataAzurermNetappVolumeGroupOracle#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeouts">DataAzurermNetappVolumeGroupOracleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.accountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#account_name DataAzurermNetappVolumeGroupOracle#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#name DataAzurermNetappVolumeGroupOracle#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#resource_group_name DataAzurermNetappVolumeGroupOracle#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#id DataAzurermNetappVolumeGroupOracle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeouts">DataAzurermNetappVolumeGroupOracleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#timeouts DataAzurermNetappVolumeGroupOracle#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermNetappVolumeGroupOracleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeouts">DataAzurermNetappVolumeGroupOracleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermNetappVolumeGroupOracle resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracle;

DataAzurermNetappVolumeGroupOracle.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracle;

DataAzurermNetappVolumeGroupOracle.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracle;

DataAzurermNetappVolumeGroupOracle.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracle;

DataAzurermNetappVolumeGroupOracle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermNetappVolumeGroupOracle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermNetappVolumeGroupOracle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermNetappVolumeGroupOracle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermNetappVolumeGroupOracle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermNetappVolumeGroupOracle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.applicationIdentifier">applicationIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.groupDescription">groupDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference">DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList">DataAzurermNetappVolumeGroupOracleVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeouts">DataAzurermNetappVolumeGroupOracleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.applicationIdentifier"></a>

```java
public java.lang.String getApplicationIdentifier();
```

- *Type:* java.lang.String

---

##### `groupDescription`<sup>Required</sup> <a name="groupDescription" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.groupDescription"></a>

```java
public java.lang.String getGroupDescription();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.timeouts"></a>

```java
public DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference">DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.volume"></a>

```java
public DataAzurermNetappVolumeGroupOracleVolumeList getVolume();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList">DataAzurermNetappVolumeGroupOracleVolumeList</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeouts">DataAzurermNetappVolumeGroupOracleTimeouts</a>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracle.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappVolumeGroupOracleConfig <a name="DataAzurermNetappVolumeGroupOracleConfig" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleConfig;

DataAzurermNetappVolumeGroupOracleConfig.builder()
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
    .accountName(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurermNetappVolumeGroupOracleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#account_name DataAzurermNetappVolumeGroupOracle#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#name DataAzurermNetappVolumeGroupOracle#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#resource_group_name DataAzurermNetappVolumeGroupOracle#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#id DataAzurermNetappVolumeGroupOracle#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeouts">DataAzurermNetappVolumeGroupOracleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#account_name DataAzurermNetappVolumeGroupOracle#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#name DataAzurermNetappVolumeGroupOracle#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#resource_group_name DataAzurermNetappVolumeGroupOracle#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#id DataAzurermNetappVolumeGroupOracle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleConfig.property.timeouts"></a>

```java
public DataAzurermNetappVolumeGroupOracleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeouts">DataAzurermNetappVolumeGroupOracleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#timeouts DataAzurermNetappVolumeGroupOracle#timeouts}

---

### DataAzurermNetappVolumeGroupOracleTimeouts <a name="DataAzurermNetappVolumeGroupOracleTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleTimeouts;

DataAzurermNetappVolumeGroupOracleTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#read DataAzurermNetappVolumeGroupOracle#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.30.0/docs/data-sources/netapp_volume_group_oracle#read DataAzurermNetappVolumeGroupOracle#read}.

---

### DataAzurermNetappVolumeGroupOracleVolume <a name="DataAzurermNetappVolumeGroupOracleVolume" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleVolume;

DataAzurermNetappVolumeGroupOracleVolume.builder()
    .build();
```


### DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication <a name="DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication;

DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication.builder()
    .build();
```


### DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy <a name="DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy;

DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy.builder()
    .build();
```


### DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule <a name="DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule;

DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference <a name="DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference;

new DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeouts">DataAzurermNetappVolumeGroupOracleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleTimeouts">DataAzurermNetappVolumeGroupOracleTimeouts</a>

---


### DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList <a name="DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList;

new DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.get"></a>

```java
public DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference <a name="DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference;

new DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.endpointType">endpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation">remoteVolumeLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId">remoteVolumeResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.replicationFrequency">replicationFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication">DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.endpointType"></a>

```java
public java.lang.String getEndpointType();
```

- *Type:* java.lang.String

---

##### `remoteVolumeLocation`<sup>Required</sup> <a name="remoteVolumeLocation" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation"></a>

```java
public java.lang.String getRemoteVolumeLocation();
```

- *Type:* java.lang.String

---

##### `remoteVolumeResourceId`<sup>Required</sup> <a name="remoteVolumeResourceId" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId"></a>

```java
public java.lang.String getRemoteVolumeResourceId();
```

- *Type:* java.lang.String

---

##### `replicationFrequency`<sup>Required</sup> <a name="replicationFrequency" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.replicationFrequency"></a>

```java
public java.lang.String getReplicationFrequency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationOutputReference.property.internalValue"></a>

```java
public DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication">DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplication</a>

---


### DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList <a name="DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList;

new DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.get"></a>

```java
public DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference <a name="DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference;

new DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId">snapshotPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `snapshotPolicyId`<sup>Required</sup> <a name="snapshotPolicyId" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId"></a>

```java
public java.lang.String getSnapshotPolicyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue"></a>

```java
public DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy">DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicy</a>

---


### DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList <a name="DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList;

new DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.get"></a>

```java
public DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference <a name="DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference;

new DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.allowedClients">allowedClients</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv3Enabled">nfsv3Enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv41Enabled">nfsv41Enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled">rootAccessEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.ruleIndex">ruleIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadOnly">unixReadOnly</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadWrite">unixReadWrite</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule">DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.allowedClients"></a>

```java
public java.lang.String getAllowedClients();
```

- *Type:* java.lang.String

---

##### `nfsv3Enabled`<sup>Required</sup> <a name="nfsv3Enabled" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv3Enabled"></a>

```java
public IResolvable getNfsv3Enabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nfsv41Enabled`<sup>Required</sup> <a name="nfsv41Enabled" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.nfsv41Enabled"></a>

```java
public IResolvable getNfsv41Enabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `rootAccessEnabled`<sup>Required</sup> <a name="rootAccessEnabled" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled"></a>

```java
public IResolvable getRootAccessEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ruleIndex`<sup>Required</sup> <a name="ruleIndex" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.ruleIndex"></a>

```java
public java.lang.Number getRuleIndex();
```

- *Type:* java.lang.Number

---

##### `unixReadOnly`<sup>Required</sup> <a name="unixReadOnly" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadOnly"></a>

```java
public IResolvable getUnixReadOnly();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `unixReadWrite`<sup>Required</sup> <a name="unixReadWrite" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.unixReadWrite"></a>

```java
public IResolvable getUnixReadWrite();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleOutputReference.property.internalValue"></a>

```java
public DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule">DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRule</a>

---


### DataAzurermNetappVolumeGroupOracleVolumeList <a name="DataAzurermNetappVolumeGroupOracleVolumeList" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleVolumeList;

new DataAzurermNetappVolumeGroupOracleVolumeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.get"></a>

```java
public DataAzurermNetappVolumeGroupOracleVolumeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermNetappVolumeGroupOracleVolumeOutputReference <a name="DataAzurermNetappVolumeGroupOracleVolumeOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_netapp_volume_group_oracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference;

new DataAzurermNetappVolumeGroupOracleVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.capacityPoolId">capacityPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionReplication">dataProtectionReplication</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList">DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionSnapshotPolicy">dataProtectionSnapshotPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList">DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.encryptionKeySource">encryptionKeySource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.exportPolicyRule">exportPolicyRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList">DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.keyVaultPrivateEndpointId">keyVaultPrivateEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.mountIpAddresses">mountIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.networkFeatures">networkFeatures</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.proximityPlacementGroupId">proximityPlacementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.securityStyle">securityStyle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.serviceLevel">serviceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.snapshotDirectoryVisible">snapshotDirectoryVisible</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.storageQuotaInGb">storageQuotaInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.throughputInMibps">throughputInMibps</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.volumePath">volumePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.volumeSpecName">volumeSpecName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolume">DataAzurermNetappVolumeGroupOracleVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityPoolId`<sup>Required</sup> <a name="capacityPoolId" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.capacityPoolId"></a>

```java
public java.lang.String getCapacityPoolId();
```

- *Type:* java.lang.String

---

##### `dataProtectionReplication`<sup>Required</sup> <a name="dataProtectionReplication" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionReplication"></a>

```java
public DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList getDataProtectionReplication();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList">DataAzurermNetappVolumeGroupOracleVolumeDataProtectionReplicationList</a>

---

##### `dataProtectionSnapshotPolicy`<sup>Required</sup> <a name="dataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.dataProtectionSnapshotPolicy"></a>

```java
public DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList getDataProtectionSnapshotPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList">DataAzurermNetappVolumeGroupOracleVolumeDataProtectionSnapshotPolicyList</a>

---

##### `encryptionKeySource`<sup>Required</sup> <a name="encryptionKeySource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.encryptionKeySource"></a>

```java
public java.lang.String getEncryptionKeySource();
```

- *Type:* java.lang.String

---

##### `exportPolicyRule`<sup>Required</sup> <a name="exportPolicyRule" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.exportPolicyRule"></a>

```java
public DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList getExportPolicyRule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList">DataAzurermNetappVolumeGroupOracleVolumeExportPolicyRuleList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyVaultPrivateEndpointId`<sup>Required</sup> <a name="keyVaultPrivateEndpointId" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.keyVaultPrivateEndpointId"></a>

```java
public java.lang.String getKeyVaultPrivateEndpointId();
```

- *Type:* java.lang.String

---

##### `mountIpAddresses`<sup>Required</sup> <a name="mountIpAddresses" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.mountIpAddresses"></a>

```java
public java.util.List<java.lang.String> getMountIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkFeatures`<sup>Required</sup> <a name="networkFeatures" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.networkFeatures"></a>

```java
public java.lang.String getNetworkFeatures();
```

- *Type:* java.lang.String

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `proximityPlacementGroupId`<sup>Required</sup> <a name="proximityPlacementGroupId" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.proximityPlacementGroupId"></a>

```java
public java.lang.String getProximityPlacementGroupId();
```

- *Type:* java.lang.String

---

##### `securityStyle`<sup>Required</sup> <a name="securityStyle" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.securityStyle"></a>

```java
public java.lang.String getSecurityStyle();
```

- *Type:* java.lang.String

---

##### `serviceLevel`<sup>Required</sup> <a name="serviceLevel" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.serviceLevel"></a>

```java
public java.lang.String getServiceLevel();
```

- *Type:* java.lang.String

---

##### `snapshotDirectoryVisible`<sup>Required</sup> <a name="snapshotDirectoryVisible" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.snapshotDirectoryVisible"></a>

```java
public IResolvable getSnapshotDirectoryVisible();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `storageQuotaInGb`<sup>Required</sup> <a name="storageQuotaInGb" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.storageQuotaInGb"></a>

```java
public java.lang.Number getStorageQuotaInGb();
```

- *Type:* java.lang.Number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `throughputInMibps`<sup>Required</sup> <a name="throughputInMibps" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.throughputInMibps"></a>

```java
public java.lang.Number getThroughputInMibps();
```

- *Type:* java.lang.Number

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.volumePath"></a>

```java
public java.lang.String getVolumePath();
```

- *Type:* java.lang.String

---

##### `volumeSpecName`<sup>Required</sup> <a name="volumeSpecName" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.volumeSpecName"></a>

```java
public java.lang.String getVolumeSpecName();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolumeOutputReference.property.internalValue"></a>

```java
public DataAzurermNetappVolumeGroupOracleVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupOracle.DataAzurermNetappVolumeGroupOracleVolume">DataAzurermNetappVolumeGroupOracleVolume</a>

---



