# `dataAzurermStorageAccountSas` Submodule <a name="`dataAzurermStorageAccountSas` Submodule" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageAccountSas <a name="DataAzurermStorageAccountSas" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas azurerm_storage_account_sas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_storage_account_sas.DataAzurermStorageAccountSas;

DataAzurermStorageAccountSas.Builder.create(Construct scope, java.lang.String id)
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
    .connectionString(java.lang.String)
    .expiry(java.lang.String)
    .permissions(DataAzurermStorageAccountSasPermissions)
    .resourceTypes(DataAzurermStorageAccountSasResourceTypes)
    .services(DataAzurermStorageAccountSasServices)
    .start(java.lang.String)
//  .httpsOnly(java.lang.Boolean)
//  .httpsOnly(IResolvable)
//  .id(java.lang.String)
//  .ipAddresses(java.lang.String)
//  .signedVersion(java.lang.String)
//  .timeouts(DataAzurermStorageAccountSasTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#connection_string DataAzurermStorageAccountSas#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.expiry">expiry</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#expiry DataAzurermStorageAccountSas#expiry}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a></code> | permissions block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.resourceTypes">resourceTypes</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a></code> | resource_types block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.services">services</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a></code> | services block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.start">start</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#start DataAzurermStorageAccountSas#start}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#https_only DataAzurermStorageAccountSas#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#id DataAzurermStorageAccountSas#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.ipAddresses">ipAddresses</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#ip_addresses DataAzurermStorageAccountSas#ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.signedVersion">signedVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#signed_version DataAzurermStorageAccountSas#signed_version}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.connectionString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#connection_string DataAzurermStorageAccountSas#connection_string}.

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.expiry"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#expiry DataAzurermStorageAccountSas#expiry}.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.permissions"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#permissions DataAzurermStorageAccountSas#permissions}

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.resourceTypes"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a>

resource_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#resource_types DataAzurermStorageAccountSas#resource_types}

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.services"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a>

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#services DataAzurermStorageAccountSas#services}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.start"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#start DataAzurermStorageAccountSas#start}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.httpsOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#https_only DataAzurermStorageAccountSas#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#id DataAzurermStorageAccountSas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.ipAddresses"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#ip_addresses DataAzurermStorageAccountSas#ip_addresses}.

---

##### `signedVersion`<sup>Optional</sup> <a name="signedVersion" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.signedVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#signed_version DataAzurermStorageAccountSas#signed_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#timeouts DataAzurermStorageAccountSas#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putResourceTypes">putResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putServices">putServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetHttpsOnly">resetHttpsOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetSignedVersion">resetSignedVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions"></a>

```java
public void putPermissions(DataAzurermStorageAccountSasPermissions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a>

---

##### `putResourceTypes` <a name="putResourceTypes" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putResourceTypes"></a>

```java
public void putResourceTypes(DataAzurermStorageAccountSasResourceTypes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putResourceTypes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a>

---

##### `putServices` <a name="putServices" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putServices"></a>

```java
public void putServices(DataAzurermStorageAccountSasServices value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putServices.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermStorageAccountSasTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a>

---

##### `resetHttpsOnly` <a name="resetHttpsOnly" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetHttpsOnly"></a>

```java
public void resetHttpsOnly()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetId"></a>

```java
public void resetId()
```

##### `resetIpAddresses` <a name="resetIpAddresses" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetIpAddresses"></a>

```java
public void resetIpAddresses()
```

##### `resetSignedVersion` <a name="resetSignedVersion" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetSignedVersion"></a>

```java
public void resetSignedVersion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermStorageAccountSas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_storage_account_sas.DataAzurermStorageAccountSas;

DataAzurermStorageAccountSas.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_storage_account_sas.DataAzurermStorageAccountSas;

DataAzurermStorageAccountSas.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_storage_account_sas.DataAzurermStorageAccountSas;

DataAzurermStorageAccountSas.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_storage_account_sas.DataAzurermStorageAccountSas;

DataAzurermStorageAccountSas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermStorageAccountSas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermStorageAccountSas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermStorageAccountSas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermStorageAccountSas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermStorageAccountSas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference">DataAzurermStorageAccountSasPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.resourceTypes">resourceTypes</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference">DataAzurermStorageAccountSasResourceTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.sas">sas</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.services">services</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference">DataAzurermStorageAccountSasServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference">DataAzurermStorageAccountSasTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.connectionStringInput">connectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.expiryInput">expiryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.httpsOnlyInput">httpsOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.ipAddressesInput">ipAddressesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.permissionsInput">permissionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.resourceTypesInput">resourceTypesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.servicesInput">servicesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.signedVersionInput">signedVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.startInput">startInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.expiry">expiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.ipAddresses">ipAddresses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.signedVersion">signedVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.permissions"></a>

```java
public DataAzurermStorageAccountSasPermissionsOutputReference getPermissions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference">DataAzurermStorageAccountSasPermissionsOutputReference</a>

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.resourceTypes"></a>

```java
public DataAzurermStorageAccountSasResourceTypesOutputReference getResourceTypes();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference">DataAzurermStorageAccountSasResourceTypesOutputReference</a>

---

##### `sas`<sup>Required</sup> <a name="sas" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.sas"></a>

```java
public java.lang.String getSas();
```

- *Type:* java.lang.String

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.services"></a>

```java
public DataAzurermStorageAccountSasServicesOutputReference getServices();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference">DataAzurermStorageAccountSasServicesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.timeouts"></a>

```java
public DataAzurermStorageAccountSasTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference">DataAzurermStorageAccountSasTimeoutsOutputReference</a>

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.connectionStringInput"></a>

```java
public java.lang.String getConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `expiryInput`<sup>Optional</sup> <a name="expiryInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.expiryInput"></a>

```java
public java.lang.String getExpiryInput();
```

- *Type:* java.lang.String

---

##### `httpsOnlyInput`<sup>Optional</sup> <a name="httpsOnlyInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.httpsOnlyInput"></a>

```java
public java.lang.Object getHttpsOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.ipAddressesInput"></a>

```java
public java.lang.String getIpAddressesInput();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.permissionsInput"></a>

```java
public DataAzurermStorageAccountSasPermissions getPermissionsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a>

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.resourceTypesInput"></a>

```java
public DataAzurermStorageAccountSasResourceTypes getResourceTypesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a>

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.servicesInput"></a>

```java
public DataAzurermStorageAccountSasServices getServicesInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a>

---

##### `signedVersionInput`<sup>Optional</sup> <a name="signedVersionInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.signedVersionInput"></a>

```java
public java.lang.String getSignedVersionInput();
```

- *Type:* java.lang.String

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.startInput"></a>

```java
public java.lang.String getStartInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.httpsOnly"></a>

```java
public java.lang.Object getHttpsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.ipAddresses"></a>

```java
public java.lang.String getIpAddresses();
```

- *Type:* java.lang.String

---

##### `signedVersion`<sup>Required</sup> <a name="signedVersion" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.signedVersion"></a>

```java
public java.lang.String getSignedVersion();
```

- *Type:* java.lang.String

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageAccountSasConfig <a name="DataAzurermStorageAccountSasConfig" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_storage_account_sas.DataAzurermStorageAccountSasConfig;

DataAzurermStorageAccountSasConfig.builder()
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
    .connectionString(java.lang.String)
    .expiry(java.lang.String)
    .permissions(DataAzurermStorageAccountSasPermissions)
    .resourceTypes(DataAzurermStorageAccountSasResourceTypes)
    .services(DataAzurermStorageAccountSasServices)
    .start(java.lang.String)
//  .httpsOnly(java.lang.Boolean)
//  .httpsOnly(IResolvable)
//  .id(java.lang.String)
//  .ipAddresses(java.lang.String)
//  .signedVersion(java.lang.String)
//  .timeouts(DataAzurermStorageAccountSasTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#connection_string DataAzurermStorageAccountSas#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.expiry">expiry</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#expiry DataAzurermStorageAccountSas#expiry}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a></code> | permissions block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.resourceTypes">resourceTypes</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a></code> | resource_types block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.services">services</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a></code> | services block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.start">start</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#start DataAzurermStorageAccountSas#start}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.httpsOnly">httpsOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#https_only DataAzurermStorageAccountSas#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#id DataAzurermStorageAccountSas#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.ipAddresses">ipAddresses</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#ip_addresses DataAzurermStorageAccountSas#ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.signedVersion">signedVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#signed_version DataAzurermStorageAccountSas#signed_version}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#connection_string DataAzurermStorageAccountSas#connection_string}.

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.expiry"></a>

```java
public java.lang.String getExpiry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#expiry DataAzurermStorageAccountSas#expiry}.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.permissions"></a>

```java
public DataAzurermStorageAccountSasPermissions getPermissions();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#permissions DataAzurermStorageAccountSas#permissions}

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.resourceTypes"></a>

```java
public DataAzurermStorageAccountSasResourceTypes getResourceTypes();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a>

resource_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#resource_types DataAzurermStorageAccountSas#resource_types}

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.services"></a>

```java
public DataAzurermStorageAccountSasServices getServices();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a>

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#services DataAzurermStorageAccountSas#services}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#start DataAzurermStorageAccountSas#start}.

---

##### `httpsOnly`<sup>Optional</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.httpsOnly"></a>

```java
public java.lang.Object getHttpsOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#https_only DataAzurermStorageAccountSas#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#id DataAzurermStorageAccountSas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.ipAddresses"></a>

```java
public java.lang.String getIpAddresses();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#ip_addresses DataAzurermStorageAccountSas#ip_addresses}.

---

##### `signedVersion`<sup>Optional</sup> <a name="signedVersion" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.signedVersion"></a>

```java
public java.lang.String getSignedVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#signed_version DataAzurermStorageAccountSas#signed_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.timeouts"></a>

```java
public DataAzurermStorageAccountSasTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#timeouts DataAzurermStorageAccountSas#timeouts}

---

### DataAzurermStorageAccountSasPermissions <a name="DataAzurermStorageAccountSasPermissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_storage_account_sas.DataAzurermStorageAccountSasPermissions;

DataAzurermStorageAccountSasPermissions.builder()
    .add(java.lang.Boolean)
    .add(IResolvable)
    .create(java.lang.Boolean)
    .create(IResolvable)
    .delete(java.lang.Boolean)
    .delete(IResolvable)
    .filter(java.lang.Boolean)
    .filter(IResolvable)
    .list(java.lang.Boolean)
    .list(IResolvable)
    .process(java.lang.Boolean)
    .process(IResolvable)
    .read(java.lang.Boolean)
    .read(IResolvable)
    .tag(java.lang.Boolean)
    .tag(IResolvable)
    .update(java.lang.Boolean)
    .update(IResolvable)
    .write(java.lang.Boolean)
    .write(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.add">add</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#add DataAzurermStorageAccountSas#add}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.create">create</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#create DataAzurermStorageAccountSas#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.delete">delete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#delete DataAzurermStorageAccountSas#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.filter">filter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#filter DataAzurermStorageAccountSas#filter}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.list">list</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#list DataAzurermStorageAccountSas#list}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.process">process</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#process DataAzurermStorageAccountSas#process}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.read">read</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.tag">tag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#tag DataAzurermStorageAccountSas#tag}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.update">update</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#update DataAzurermStorageAccountSas#update}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.write">write</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#write DataAzurermStorageAccountSas#write}. |

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.add"></a>

```java
public java.lang.Object getAdd();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#add DataAzurermStorageAccountSas#add}.

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.create"></a>

```java
public java.lang.Object getCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#create DataAzurermStorageAccountSas#create}.

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.delete"></a>

```java
public java.lang.Object getDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#delete DataAzurermStorageAccountSas#delete}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#filter DataAzurermStorageAccountSas#filter}.

---

##### `list`<sup>Required</sup> <a name="list" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.list"></a>

```java
public java.lang.Object getList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#list DataAzurermStorageAccountSas#list}.

---

##### `process`<sup>Required</sup> <a name="process" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.process"></a>

```java
public java.lang.Object getProcess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#process DataAzurermStorageAccountSas#process}.

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.read"></a>

```java
public java.lang.Object getRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}.

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.tag"></a>

```java
public java.lang.Object getTag();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#tag DataAzurermStorageAccountSas#tag}.

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.update"></a>

```java
public java.lang.Object getUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#update DataAzurermStorageAccountSas#update}.

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.write"></a>

```java
public java.lang.Object getWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#write DataAzurermStorageAccountSas#write}.

---

### DataAzurermStorageAccountSasResourceTypes <a name="DataAzurermStorageAccountSasResourceTypes" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_storage_account_sas.DataAzurermStorageAccountSasResourceTypes;

DataAzurermStorageAccountSasResourceTypes.builder()
    .container(java.lang.Boolean)
    .container(IResolvable)
    .object(java.lang.Boolean)
    .object(IResolvable)
    .service(java.lang.Boolean)
    .service(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.container">container</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#container DataAzurermStorageAccountSas#container}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.object">object</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#object DataAzurermStorageAccountSas#object}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.service">service</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#service DataAzurermStorageAccountSas#service}. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.container"></a>

```java
public java.lang.Object getContainer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#container DataAzurermStorageAccountSas#container}.

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.object"></a>

```java
public java.lang.Object getObject();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#object DataAzurermStorageAccountSas#object}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.service"></a>

```java
public java.lang.Object getService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#service DataAzurermStorageAccountSas#service}.

---

### DataAzurermStorageAccountSasServices <a name="DataAzurermStorageAccountSasServices" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_storage_account_sas.DataAzurermStorageAccountSasServices;

DataAzurermStorageAccountSasServices.builder()
    .blob(java.lang.Boolean)
    .blob(IResolvable)
    .file(java.lang.Boolean)
    .file(IResolvable)
    .queue(java.lang.Boolean)
    .queue(IResolvable)
    .table(java.lang.Boolean)
    .table(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.blob">blob</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#blob DataAzurermStorageAccountSas#blob}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.file">file</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#file DataAzurermStorageAccountSas#file}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.queue">queue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#queue DataAzurermStorageAccountSas#queue}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.table">table</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#table DataAzurermStorageAccountSas#table}. |

---

##### `blob`<sup>Required</sup> <a name="blob" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.blob"></a>

```java
public java.lang.Object getBlob();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#blob DataAzurermStorageAccountSas#blob}.

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.file"></a>

```java
public java.lang.Object getFile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#file DataAzurermStorageAccountSas#file}.

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.queue"></a>

```java
public java.lang.Object getQueue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#queue DataAzurermStorageAccountSas#queue}.

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.table"></a>

```java
public java.lang.Object getTable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#table DataAzurermStorageAccountSas#table}.

---

### DataAzurermStorageAccountSasTimeouts <a name="DataAzurermStorageAccountSasTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_storage_account_sas.DataAzurermStorageAccountSasTimeouts;

DataAzurermStorageAccountSasTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageAccountSasPermissionsOutputReference <a name="DataAzurermStorageAccountSasPermissionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_storage_account_sas.DataAzurermStorageAccountSasPermissionsOutputReference;

new DataAzurermStorageAccountSasPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.addInput">addInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.listInput">listInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.processInput">processInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.tagInput">tagInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.writeInput">writeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.add">add</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.create">create</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.delete">delete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.filter">filter</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.list">list</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.process">process</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.read">read</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.tag">tag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.update">update</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.write">write</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addInput`<sup>Optional</sup> <a name="addInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.addInput"></a>

```java
public java.lang.Object getAddInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.createInput"></a>

```java
public java.lang.Object getCreateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.deleteInput"></a>

```java
public java.lang.Object getDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `listInput`<sup>Optional</sup> <a name="listInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.listInput"></a>

```java
public java.lang.Object getListInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `processInput`<sup>Optional</sup> <a name="processInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.processInput"></a>

```java
public java.lang.Object getProcessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.readInput"></a>

```java
public java.lang.Object getReadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.tagInput"></a>

```java
public java.lang.Object getTagInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.updateInput"></a>

```java
public java.lang.Object getUpdateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `writeInput`<sup>Optional</sup> <a name="writeInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.writeInput"></a>

```java
public java.lang.Object getWriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.add"></a>

```java
public java.lang.Object getAdd();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.create"></a>

```java
public java.lang.Object getCreate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.delete"></a>

```java
public java.lang.Object getDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `list`<sup>Required</sup> <a name="list" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.list"></a>

```java
public java.lang.Object getList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `process`<sup>Required</sup> <a name="process" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.process"></a>

```java
public java.lang.Object getProcess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.read"></a>

```java
public java.lang.Object getRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.tag"></a>

```java
public java.lang.Object getTag();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.update"></a>

```java
public java.lang.Object getUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.write"></a>

```java
public java.lang.Object getWrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.internalValue"></a>

```java
public DataAzurermStorageAccountSasPermissions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a>

---


### DataAzurermStorageAccountSasResourceTypesOutputReference <a name="DataAzurermStorageAccountSasResourceTypesOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_storage_account_sas.DataAzurermStorageAccountSasResourceTypesOutputReference;

new DataAzurermStorageAccountSasResourceTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.containerInput">containerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.container">container</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.object">object</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.service">service</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.containerInput"></a>

```java
public java.lang.Object getContainerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.objectInput"></a>

```java
public java.lang.Object getObjectInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.serviceInput"></a>

```java
public java.lang.Object getServiceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.container"></a>

```java
public java.lang.Object getContainer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.object"></a>

```java
public java.lang.Object getObject();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.service"></a>

```java
public java.lang.Object getService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.internalValue"></a>

```java
public DataAzurermStorageAccountSasResourceTypes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a>

---


### DataAzurermStorageAccountSasServicesOutputReference <a name="DataAzurermStorageAccountSasServicesOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_storage_account_sas.DataAzurermStorageAccountSasServicesOutputReference;

new DataAzurermStorageAccountSasServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.blobInput">blobInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.fileInput">fileInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.queueInput">queueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.tableInput">tableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.blob">blob</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.file">file</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.queue">queue</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.table">table</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blobInput`<sup>Optional</sup> <a name="blobInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.blobInput"></a>

```java
public java.lang.Object getBlobInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.fileInput"></a>

```java
public java.lang.Object getFileInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queueInput`<sup>Optional</sup> <a name="queueInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.queueInput"></a>

```java
public java.lang.Object getQueueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.tableInput"></a>

```java
public java.lang.Object getTableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blob`<sup>Required</sup> <a name="blob" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.blob"></a>

```java
public java.lang.Object getBlob();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.file"></a>

```java
public java.lang.Object getFile();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.queue"></a>

```java
public java.lang.Object getQueue();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.table"></a>

```java
public java.lang.Object getTable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.internalValue"></a>

```java
public DataAzurermStorageAccountSasServices getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a>

---


### DataAzurermStorageAccountSasTimeoutsOutputReference <a name="DataAzurermStorageAccountSasTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_storage_account_sas.DataAzurermStorageAccountSasTimeoutsOutputReference;

new DataAzurermStorageAccountSasTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a>

---



