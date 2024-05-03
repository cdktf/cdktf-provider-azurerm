# `dataAzurermConfidentialLedger` Submodule <a name="`dataAzurermConfidentialLedger` Submodule" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermConfidentialLedger <a name="DataAzurermConfidentialLedger" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger azurerm_confidential_ledger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_confidential_ledger.DataAzurermConfidentialLedger;

DataAzurermConfidentialLedger.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(DataAzurermConfidentialLedgerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#name DataAzurermConfidentialLedger#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#resource_group_name DataAzurermConfidentialLedger#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#id DataAzurermConfidentialLedger#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#name DataAzurermConfidentialLedger#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#resource_group_name DataAzurermConfidentialLedger#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#id DataAzurermConfidentialLedger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#timeouts DataAzurermConfidentialLedger#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.putTimeouts"></a>

```java
public void putTimeouts(DataAzurermConfidentialLedgerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermConfidentialLedger resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_confidential_ledger.DataAzurermConfidentialLedger;

DataAzurermConfidentialLedger.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_confidential_ledger.DataAzurermConfidentialLedger;

DataAzurermConfidentialLedger.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_confidential_ledger.DataAzurermConfidentialLedger;

DataAzurermConfidentialLedger.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_confidential_ledger.DataAzurermConfidentialLedger;

DataAzurermConfidentialLedger.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAzurermConfidentialLedger.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAzurermConfidentialLedger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAzurermConfidentialLedger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAzurermConfidentialLedger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermConfidentialLedger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.azureadBasedServicePrincipal">azureadBasedServicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList">DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.certificateBasedSecurityPrincipal">certificateBasedSecurityPrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList">DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.identityServiceEndpoint">identityServiceEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.ledgerEndpoint">ledgerEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.ledgerType">ledgerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference">DataAzurermConfidentialLedgerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `azureadBasedServicePrincipal`<sup>Required</sup> <a name="azureadBasedServicePrincipal" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.azureadBasedServicePrincipal"></a>

```java
public DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList getAzureadBasedServicePrincipal();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList">DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList</a>

---

##### `certificateBasedSecurityPrincipal`<sup>Required</sup> <a name="certificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.certificateBasedSecurityPrincipal"></a>

```java
public DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList getCertificateBasedSecurityPrincipal();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList">DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList</a>

---

##### `identityServiceEndpoint`<sup>Required</sup> <a name="identityServiceEndpoint" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.identityServiceEndpoint"></a>

```java
public java.lang.String getIdentityServiceEndpoint();
```

- *Type:* java.lang.String

---

##### `ledgerEndpoint`<sup>Required</sup> <a name="ledgerEndpoint" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.ledgerEndpoint"></a>

```java
public java.lang.String getLedgerEndpoint();
```

- *Type:* java.lang.String

---

##### `ledgerType`<sup>Required</sup> <a name="ledgerType" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.ledgerType"></a>

```java
public java.lang.String getLedgerType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.timeouts"></a>

```java
public DataAzurermConfidentialLedgerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference">DataAzurermConfidentialLedgerTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedger.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermConfidentialLedgerAzureadBasedServicePrincipal <a name="DataAzurermConfidentialLedgerAzureadBasedServicePrincipal" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_confidential_ledger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal;

DataAzurermConfidentialLedgerAzureadBasedServicePrincipal.builder()
    .build();
```


### DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal <a name="DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_confidential_ledger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal;

DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal.builder()
    .build();
```


### DataAzurermConfidentialLedgerConfig <a name="DataAzurermConfidentialLedgerConfig" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_confidential_ledger.DataAzurermConfidentialLedgerConfig;

DataAzurermConfidentialLedgerConfig.builder()
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
//  .timeouts(DataAzurermConfidentialLedgerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#name DataAzurermConfidentialLedger#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#resource_group_name DataAzurermConfidentialLedger#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#id DataAzurermConfidentialLedger#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#name DataAzurermConfidentialLedger#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#resource_group_name DataAzurermConfidentialLedger#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#id DataAzurermConfidentialLedger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerConfig.property.timeouts"></a>

```java
public DataAzurermConfidentialLedgerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#timeouts DataAzurermConfidentialLedger#timeouts}

---

### DataAzurermConfidentialLedgerTimeouts <a name="DataAzurermConfidentialLedgerTimeouts" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_confidential_ledger.DataAzurermConfidentialLedgerTimeouts;

DataAzurermConfidentialLedgerTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#read DataAzurermConfidentialLedger#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/data-sources/confidential_ledger#read DataAzurermConfidentialLedger#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList <a name="DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_confidential_ledger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList;

new DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.get"></a>

```java
public DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference <a name="DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_confidential_ledger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference;

new DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.ledgerRoleName">ledgerRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal">DataAzurermConfidentialLedgerAzureadBasedServicePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ledgerRoleName`<sup>Required</sup> <a name="ledgerRoleName" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.ledgerRoleName"></a>

```java
public java.lang.String getLedgerRoleName();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipalOutputReference.property.internalValue"></a>

```java
public DataAzurermConfidentialLedgerAzureadBasedServicePrincipal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerAzureadBasedServicePrincipal">DataAzurermConfidentialLedgerAzureadBasedServicePrincipal</a>

---


### DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList <a name="DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_confidential_ledger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList;

new DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.get"></a>

```java
public DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference <a name="DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_confidential_ledger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference;

new DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.ledgerRoleName">ledgerRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.pemPublicKey">pemPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal">DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ledgerRoleName`<sup>Required</sup> <a name="ledgerRoleName" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.ledgerRoleName"></a>

```java
public java.lang.String getLedgerRoleName();
```

- *Type:* java.lang.String

---

##### `pemPublicKey`<sup>Required</sup> <a name="pemPublicKey" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.pemPublicKey"></a>

```java
public java.lang.String getPemPublicKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipalOutputReference.property.internalValue"></a>

```java
public DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal">DataAzurermConfidentialLedgerCertificateBasedSecurityPrincipal</a>

---


### DataAzurermConfidentialLedgerTimeoutsOutputReference <a name="DataAzurermConfidentialLedgerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.data_azurerm_confidential_ledger.DataAzurermConfidentialLedgerTimeoutsOutputReference;

new DataAzurermConfidentialLedgerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.dataAzurermConfidentialLedger.DataAzurermConfidentialLedgerTimeouts">DataAzurermConfidentialLedgerTimeouts</a>

---



