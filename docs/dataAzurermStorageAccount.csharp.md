# `dataAzurermStorageAccount` Submodule <a name="`dataAzurermStorageAccount` Submodule" id="@cdktf/provider-azurerm.dataAzurermStorageAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageAccount <a name="DataAzurermStorageAccount" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_account azurerm_storage_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccount(Construct Scope, string Id, DataAzurermStorageAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig">DataAzurermStorageAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig">DataAzurermStorageAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetMinTlsVersion">ResetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermStorageAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts">DataAzurermStorageAccountTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMinTlsVersion` <a name="ResetMinTlsVersion" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetMinTlsVersion"></a>

```csharp
private void ResetMinTlsVersion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermStorageAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermStorageAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermStorageAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermStorageAccount.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermStorageAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermStorageAccount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermStorageAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermStorageAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermStorageAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accessTier">AccessTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accountKind">AccountKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accountReplicationType">AccountReplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accountTier">AccountTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.allowNestedItemsToBePublic">AllowNestedItemsToBePublic</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.azureFilesAuthentication">AzureFilesAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList">DataAzurermStorageAccountAzureFilesAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.customDomain">CustomDomain</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList">DataAzurermStorageAccountCustomDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.enableHttpsTrafficOnly">EnableHttpsTrafficOnly</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList">DataAzurermStorageAccountIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.infrastructureEncryptionEnabled">InfrastructureEncryptionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.isHnsEnabled">IsHnsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.nfsv3Enabled">Nfsv3Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobConnectionString">PrimaryBlobConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobEndpoint">PrimaryBlobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobHost">PrimaryBlobHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobInternetEndpoint">PrimaryBlobInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobInternetHost">PrimaryBlobInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobMicrosoftEndpoint">PrimaryBlobMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobMicrosoftHost">PrimaryBlobMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsEndpoint">PrimaryDfsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsHost">PrimaryDfsHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsInternetEndpoint">PrimaryDfsInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsInternetHost">PrimaryDfsInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsMicrosoftEndpoint">PrimaryDfsMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsMicrosoftHost">PrimaryDfsMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileEndpoint">PrimaryFileEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileHost">PrimaryFileHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileInternetEndpoint">PrimaryFileInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileInternetHost">PrimaryFileInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileMicrosoftEndpoint">PrimaryFileMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileMicrosoftHost">PrimaryFileMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryLocation">PrimaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueEndpoint">PrimaryQueueEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueHost">PrimaryQueueHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueMicrosoftEndpoint">PrimaryQueueMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueMicrosoftHost">PrimaryQueueMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableEndpoint">PrimaryTableEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableHost">PrimaryTableHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableMicrosoftEndpoint">PrimaryTableMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableMicrosoftHost">PrimaryTableMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebEndpoint">PrimaryWebEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebHost">PrimaryWebHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebInternetEndpoint">PrimaryWebInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebInternetHost">PrimaryWebInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebMicrosoftEndpoint">PrimaryWebMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebMicrosoftHost">PrimaryWebMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.queueEncryptionKeyType">QueueEncryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobConnectionString">SecondaryBlobConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobEndpoint">SecondaryBlobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobHost">SecondaryBlobHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobInternetEndpoint">SecondaryBlobInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobInternetHost">SecondaryBlobInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobMicrosoftEndpoint">SecondaryBlobMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobMicrosoftHost">SecondaryBlobMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsEndpoint">SecondaryDfsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsHost">SecondaryDfsHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsInternetEndpoint">SecondaryDfsInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsInternetHost">SecondaryDfsInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsMicrosoftEndpoint">SecondaryDfsMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsMicrosoftHost">SecondaryDfsMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileEndpoint">SecondaryFileEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileHost">SecondaryFileHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileInternetEndpoint">SecondaryFileInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileInternetHost">SecondaryFileInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileMicrosoftEndpoint">SecondaryFileMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileMicrosoftHost">SecondaryFileMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryLocation">SecondaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueEndpoint">SecondaryQueueEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueHost">SecondaryQueueHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueMicrosoftEndpoint">SecondaryQueueMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueMicrosoftHost">SecondaryQueueMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableEndpoint">SecondaryTableEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableHost">SecondaryTableHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableMicrosoftEndpoint">SecondaryTableMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableMicrosoftHost">SecondaryTableMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebEndpoint">SecondaryWebEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebHost">SecondaryWebHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebInternetEndpoint">SecondaryWebInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebInternetHost">SecondaryWebInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebMicrosoftEndpoint">SecondaryWebMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebMicrosoftHost">SecondaryWebMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.tableEncryptionKeyType">TableEncryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference">DataAzurermStorageAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.minTlsVersionInput">MinTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccessTier`<sup>Required</sup> <a name="AccessTier" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accessTier"></a>

```csharp
public string AccessTier { get; }
```

- *Type:* string

---

##### `AccountKind`<sup>Required</sup> <a name="AccountKind" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accountKind"></a>

```csharp
public string AccountKind { get; }
```

- *Type:* string

---

##### `AccountReplicationType`<sup>Required</sup> <a name="AccountReplicationType" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accountReplicationType"></a>

```csharp
public string AccountReplicationType { get; }
```

- *Type:* string

---

##### `AccountTier`<sup>Required</sup> <a name="AccountTier" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.accountTier"></a>

```csharp
public string AccountTier { get; }
```

- *Type:* string

---

##### `AllowNestedItemsToBePublic`<sup>Required</sup> <a name="AllowNestedItemsToBePublic" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.allowNestedItemsToBePublic"></a>

```csharp
public IResolvable AllowNestedItemsToBePublic { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AzureFilesAuthentication`<sup>Required</sup> <a name="AzureFilesAuthentication" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.azureFilesAuthentication"></a>

```csharp
public DataAzurermStorageAccountAzureFilesAuthenticationList AzureFilesAuthentication { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList">DataAzurermStorageAccountAzureFilesAuthenticationList</a>

---

##### `CustomDomain`<sup>Required</sup> <a name="CustomDomain" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.customDomain"></a>

```csharp
public DataAzurermStorageAccountCustomDomainList CustomDomain { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList">DataAzurermStorageAccountCustomDomainList</a>

---

##### `EnableHttpsTrafficOnly`<sup>Required</sup> <a name="EnableHttpsTrafficOnly" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.enableHttpsTrafficOnly"></a>

```csharp
public IResolvable EnableHttpsTrafficOnly { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.identity"></a>

```csharp
public DataAzurermStorageAccountIdentityList Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList">DataAzurermStorageAccountIdentityList</a>

---

##### `InfrastructureEncryptionEnabled`<sup>Required</sup> <a name="InfrastructureEncryptionEnabled" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.infrastructureEncryptionEnabled"></a>

```csharp
public IResolvable InfrastructureEncryptionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHnsEnabled`<sup>Required</sup> <a name="IsHnsEnabled" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.isHnsEnabled"></a>

```csharp
public IResolvable IsHnsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Nfsv3Enabled`<sup>Required</sup> <a name="Nfsv3Enabled" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.nfsv3Enabled"></a>

```csharp
public IResolvable Nfsv3Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryAccessKey"></a>

```csharp
public string PrimaryAccessKey { get; }
```

- *Type:* string

---

##### `PrimaryBlobConnectionString`<sup>Required</sup> <a name="PrimaryBlobConnectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobConnectionString"></a>

```csharp
public string PrimaryBlobConnectionString { get; }
```

- *Type:* string

---

##### `PrimaryBlobEndpoint`<sup>Required</sup> <a name="PrimaryBlobEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobEndpoint"></a>

```csharp
public string PrimaryBlobEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryBlobHost`<sup>Required</sup> <a name="PrimaryBlobHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobHost"></a>

```csharp
public string PrimaryBlobHost { get; }
```

- *Type:* string

---

##### `PrimaryBlobInternetEndpoint`<sup>Required</sup> <a name="PrimaryBlobInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobInternetEndpoint"></a>

```csharp
public string PrimaryBlobInternetEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryBlobInternetHost`<sup>Required</sup> <a name="PrimaryBlobInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobInternetHost"></a>

```csharp
public string PrimaryBlobInternetHost { get; }
```

- *Type:* string

---

##### `PrimaryBlobMicrosoftEndpoint`<sup>Required</sup> <a name="PrimaryBlobMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobMicrosoftEndpoint"></a>

```csharp
public string PrimaryBlobMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryBlobMicrosoftHost`<sup>Required</sup> <a name="PrimaryBlobMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryBlobMicrosoftHost"></a>

```csharp
public string PrimaryBlobMicrosoftHost { get; }
```

- *Type:* string

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryConnectionString"></a>

```csharp
public string PrimaryConnectionString { get; }
```

- *Type:* string

---

##### `PrimaryDfsEndpoint`<sup>Required</sup> <a name="PrimaryDfsEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsEndpoint"></a>

```csharp
public string PrimaryDfsEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryDfsHost`<sup>Required</sup> <a name="PrimaryDfsHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsHost"></a>

```csharp
public string PrimaryDfsHost { get; }
```

- *Type:* string

---

##### `PrimaryDfsInternetEndpoint`<sup>Required</sup> <a name="PrimaryDfsInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsInternetEndpoint"></a>

```csharp
public string PrimaryDfsInternetEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryDfsInternetHost`<sup>Required</sup> <a name="PrimaryDfsInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsInternetHost"></a>

```csharp
public string PrimaryDfsInternetHost { get; }
```

- *Type:* string

---

##### `PrimaryDfsMicrosoftEndpoint`<sup>Required</sup> <a name="PrimaryDfsMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsMicrosoftEndpoint"></a>

```csharp
public string PrimaryDfsMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryDfsMicrosoftHost`<sup>Required</sup> <a name="PrimaryDfsMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryDfsMicrosoftHost"></a>

```csharp
public string PrimaryDfsMicrosoftHost { get; }
```

- *Type:* string

---

##### `PrimaryFileEndpoint`<sup>Required</sup> <a name="PrimaryFileEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileEndpoint"></a>

```csharp
public string PrimaryFileEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryFileHost`<sup>Required</sup> <a name="PrimaryFileHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileHost"></a>

```csharp
public string PrimaryFileHost { get; }
```

- *Type:* string

---

##### `PrimaryFileInternetEndpoint`<sup>Required</sup> <a name="PrimaryFileInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileInternetEndpoint"></a>

```csharp
public string PrimaryFileInternetEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryFileInternetHost`<sup>Required</sup> <a name="PrimaryFileInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileInternetHost"></a>

```csharp
public string PrimaryFileInternetHost { get; }
```

- *Type:* string

---

##### `PrimaryFileMicrosoftEndpoint`<sup>Required</sup> <a name="PrimaryFileMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileMicrosoftEndpoint"></a>

```csharp
public string PrimaryFileMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryFileMicrosoftHost`<sup>Required</sup> <a name="PrimaryFileMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryFileMicrosoftHost"></a>

```csharp
public string PrimaryFileMicrosoftHost { get; }
```

- *Type:* string

---

##### `PrimaryLocation`<sup>Required</sup> <a name="PrimaryLocation" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryLocation"></a>

```csharp
public string PrimaryLocation { get; }
```

- *Type:* string

---

##### `PrimaryQueueEndpoint`<sup>Required</sup> <a name="PrimaryQueueEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueEndpoint"></a>

```csharp
public string PrimaryQueueEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryQueueHost`<sup>Required</sup> <a name="PrimaryQueueHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueHost"></a>

```csharp
public string PrimaryQueueHost { get; }
```

- *Type:* string

---

##### `PrimaryQueueMicrosoftEndpoint`<sup>Required</sup> <a name="PrimaryQueueMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueMicrosoftEndpoint"></a>

```csharp
public string PrimaryQueueMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryQueueMicrosoftHost`<sup>Required</sup> <a name="PrimaryQueueMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryQueueMicrosoftHost"></a>

```csharp
public string PrimaryQueueMicrosoftHost { get; }
```

- *Type:* string

---

##### `PrimaryTableEndpoint`<sup>Required</sup> <a name="PrimaryTableEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableEndpoint"></a>

```csharp
public string PrimaryTableEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryTableHost`<sup>Required</sup> <a name="PrimaryTableHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableHost"></a>

```csharp
public string PrimaryTableHost { get; }
```

- *Type:* string

---

##### `PrimaryTableMicrosoftEndpoint`<sup>Required</sup> <a name="PrimaryTableMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableMicrosoftEndpoint"></a>

```csharp
public string PrimaryTableMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryTableMicrosoftHost`<sup>Required</sup> <a name="PrimaryTableMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryTableMicrosoftHost"></a>

```csharp
public string PrimaryTableMicrosoftHost { get; }
```

- *Type:* string

---

##### `PrimaryWebEndpoint`<sup>Required</sup> <a name="PrimaryWebEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebEndpoint"></a>

```csharp
public string PrimaryWebEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryWebHost`<sup>Required</sup> <a name="PrimaryWebHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebHost"></a>

```csharp
public string PrimaryWebHost { get; }
```

- *Type:* string

---

##### `PrimaryWebInternetEndpoint`<sup>Required</sup> <a name="PrimaryWebInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebInternetEndpoint"></a>

```csharp
public string PrimaryWebInternetEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryWebInternetHost`<sup>Required</sup> <a name="PrimaryWebInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebInternetHost"></a>

```csharp
public string PrimaryWebInternetHost { get; }
```

- *Type:* string

---

##### `PrimaryWebMicrosoftEndpoint`<sup>Required</sup> <a name="PrimaryWebMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebMicrosoftEndpoint"></a>

```csharp
public string PrimaryWebMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `PrimaryWebMicrosoftHost`<sup>Required</sup> <a name="PrimaryWebMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.primaryWebMicrosoftHost"></a>

```csharp
public string PrimaryWebMicrosoftHost { get; }
```

- *Type:* string

---

##### `QueueEncryptionKeyType`<sup>Required</sup> <a name="QueueEncryptionKeyType" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.queueEncryptionKeyType"></a>

```csharp
public string QueueEncryptionKeyType { get; }
```

- *Type:* string

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryAccessKey"></a>

```csharp
public string SecondaryAccessKey { get; }
```

- *Type:* string

---

##### `SecondaryBlobConnectionString`<sup>Required</sup> <a name="SecondaryBlobConnectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobConnectionString"></a>

```csharp
public string SecondaryBlobConnectionString { get; }
```

- *Type:* string

---

##### `SecondaryBlobEndpoint`<sup>Required</sup> <a name="SecondaryBlobEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobEndpoint"></a>

```csharp
public string SecondaryBlobEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryBlobHost`<sup>Required</sup> <a name="SecondaryBlobHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobHost"></a>

```csharp
public string SecondaryBlobHost { get; }
```

- *Type:* string

---

##### `SecondaryBlobInternetEndpoint`<sup>Required</sup> <a name="SecondaryBlobInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobInternetEndpoint"></a>

```csharp
public string SecondaryBlobInternetEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryBlobInternetHost`<sup>Required</sup> <a name="SecondaryBlobInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobInternetHost"></a>

```csharp
public string SecondaryBlobInternetHost { get; }
```

- *Type:* string

---

##### `SecondaryBlobMicrosoftEndpoint`<sup>Required</sup> <a name="SecondaryBlobMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobMicrosoftEndpoint"></a>

```csharp
public string SecondaryBlobMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryBlobMicrosoftHost`<sup>Required</sup> <a name="SecondaryBlobMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryBlobMicrosoftHost"></a>

```csharp
public string SecondaryBlobMicrosoftHost { get; }
```

- *Type:* string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryConnectionString"></a>

```csharp
public string SecondaryConnectionString { get; }
```

- *Type:* string

---

##### `SecondaryDfsEndpoint`<sup>Required</sup> <a name="SecondaryDfsEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsEndpoint"></a>

```csharp
public string SecondaryDfsEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryDfsHost`<sup>Required</sup> <a name="SecondaryDfsHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsHost"></a>

```csharp
public string SecondaryDfsHost { get; }
```

- *Type:* string

---

##### `SecondaryDfsInternetEndpoint`<sup>Required</sup> <a name="SecondaryDfsInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsInternetEndpoint"></a>

```csharp
public string SecondaryDfsInternetEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryDfsInternetHost`<sup>Required</sup> <a name="SecondaryDfsInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsInternetHost"></a>

```csharp
public string SecondaryDfsInternetHost { get; }
```

- *Type:* string

---

##### `SecondaryDfsMicrosoftEndpoint`<sup>Required</sup> <a name="SecondaryDfsMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsMicrosoftEndpoint"></a>

```csharp
public string SecondaryDfsMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryDfsMicrosoftHost`<sup>Required</sup> <a name="SecondaryDfsMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryDfsMicrosoftHost"></a>

```csharp
public string SecondaryDfsMicrosoftHost { get; }
```

- *Type:* string

---

##### `SecondaryFileEndpoint`<sup>Required</sup> <a name="SecondaryFileEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileEndpoint"></a>

```csharp
public string SecondaryFileEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryFileHost`<sup>Required</sup> <a name="SecondaryFileHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileHost"></a>

```csharp
public string SecondaryFileHost { get; }
```

- *Type:* string

---

##### `SecondaryFileInternetEndpoint`<sup>Required</sup> <a name="SecondaryFileInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileInternetEndpoint"></a>

```csharp
public string SecondaryFileInternetEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryFileInternetHost`<sup>Required</sup> <a name="SecondaryFileInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileInternetHost"></a>

```csharp
public string SecondaryFileInternetHost { get; }
```

- *Type:* string

---

##### `SecondaryFileMicrosoftEndpoint`<sup>Required</sup> <a name="SecondaryFileMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileMicrosoftEndpoint"></a>

```csharp
public string SecondaryFileMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryFileMicrosoftHost`<sup>Required</sup> <a name="SecondaryFileMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryFileMicrosoftHost"></a>

```csharp
public string SecondaryFileMicrosoftHost { get; }
```

- *Type:* string

---

##### `SecondaryLocation`<sup>Required</sup> <a name="SecondaryLocation" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryLocation"></a>

```csharp
public string SecondaryLocation { get; }
```

- *Type:* string

---

##### `SecondaryQueueEndpoint`<sup>Required</sup> <a name="SecondaryQueueEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueEndpoint"></a>

```csharp
public string SecondaryQueueEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryQueueHost`<sup>Required</sup> <a name="SecondaryQueueHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueHost"></a>

```csharp
public string SecondaryQueueHost { get; }
```

- *Type:* string

---

##### `SecondaryQueueMicrosoftEndpoint`<sup>Required</sup> <a name="SecondaryQueueMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueMicrosoftEndpoint"></a>

```csharp
public string SecondaryQueueMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryQueueMicrosoftHost`<sup>Required</sup> <a name="SecondaryQueueMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryQueueMicrosoftHost"></a>

```csharp
public string SecondaryQueueMicrosoftHost { get; }
```

- *Type:* string

---

##### `SecondaryTableEndpoint`<sup>Required</sup> <a name="SecondaryTableEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableEndpoint"></a>

```csharp
public string SecondaryTableEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryTableHost`<sup>Required</sup> <a name="SecondaryTableHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableHost"></a>

```csharp
public string SecondaryTableHost { get; }
```

- *Type:* string

---

##### `SecondaryTableMicrosoftEndpoint`<sup>Required</sup> <a name="SecondaryTableMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableMicrosoftEndpoint"></a>

```csharp
public string SecondaryTableMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryTableMicrosoftHost`<sup>Required</sup> <a name="SecondaryTableMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryTableMicrosoftHost"></a>

```csharp
public string SecondaryTableMicrosoftHost { get; }
```

- *Type:* string

---

##### `SecondaryWebEndpoint`<sup>Required</sup> <a name="SecondaryWebEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebEndpoint"></a>

```csharp
public string SecondaryWebEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryWebHost`<sup>Required</sup> <a name="SecondaryWebHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebHost"></a>

```csharp
public string SecondaryWebHost { get; }
```

- *Type:* string

---

##### `SecondaryWebInternetEndpoint`<sup>Required</sup> <a name="SecondaryWebInternetEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebInternetEndpoint"></a>

```csharp
public string SecondaryWebInternetEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryWebInternetHost`<sup>Required</sup> <a name="SecondaryWebInternetHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebInternetHost"></a>

```csharp
public string SecondaryWebInternetHost { get; }
```

- *Type:* string

---

##### `SecondaryWebMicrosoftEndpoint`<sup>Required</sup> <a name="SecondaryWebMicrosoftEndpoint" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebMicrosoftEndpoint"></a>

```csharp
public string SecondaryWebMicrosoftEndpoint { get; }
```

- *Type:* string

---

##### `SecondaryWebMicrosoftHost`<sup>Required</sup> <a name="SecondaryWebMicrosoftHost" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.secondaryWebMicrosoftHost"></a>

```csharp
public string SecondaryWebMicrosoftHost { get; }
```

- *Type:* string

---

##### `TableEncryptionKeyType`<sup>Required</sup> <a name="TableEncryptionKeyType" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.tableEncryptionKeyType"></a>

```csharp
public string TableEncryptionKeyType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.timeouts"></a>

```csharp
public DataAzurermStorageAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference">DataAzurermStorageAccountTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MinTlsVersionInput`<sup>Optional</sup> <a name="MinTlsVersionInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.minTlsVersionInput"></a>

```csharp
public string MinTlsVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MinTlsVersion`<sup>Required</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageAccountAzureFilesAuthentication <a name="DataAzurermStorageAccountAzureFilesAuthentication" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountAzureFilesAuthentication {

};
```


### DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory <a name="DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory {

};
```


### DataAzurermStorageAccountConfig <a name="DataAzurermStorageAccountConfig" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string Id = null,
    string MinTlsVersion = null,
    DataAzurermStorageAccountTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_account#name DataAzurermStorageAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_account#resource_group_name DataAzurermStorageAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_account#id DataAzurermStorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.minTlsVersion">MinTlsVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_account#min_tls_version DataAzurermStorageAccount#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts">DataAzurermStorageAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_account#name DataAzurermStorageAccount#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_account#resource_group_name DataAzurermStorageAccount#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_account#id DataAzurermStorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MinTlsVersion`<sup>Optional</sup> <a name="MinTlsVersion" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.minTlsVersion"></a>

```csharp
public string MinTlsVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_account#min_tls_version DataAzurermStorageAccount#min_tls_version}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountConfig.property.timeouts"></a>

```csharp
public DataAzurermStorageAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts">DataAzurermStorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_account#timeouts DataAzurermStorageAccount#timeouts}

---

### DataAzurermStorageAccountCustomDomain <a name="DataAzurermStorageAccountCustomDomain" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountCustomDomain {

};
```


### DataAzurermStorageAccountIdentity <a name="DataAzurermStorageAccountIdentity" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountIdentity {

};
```


### DataAzurermStorageAccountTimeouts <a name="DataAzurermStorageAccountTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_account#read DataAzurermStorageAccount#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.86.0/docs/data-sources/storage_account#read DataAzurermStorageAccount#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList <a name="DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.get"></a>

```csharp
private DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference <a name="DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuid">DomainGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSid">DomainSid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestName">ForestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainName">NetbiosDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSid">StorageSid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory">DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainGuid`<sup>Required</sup> <a name="DomainGuid" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainGuid"></a>

```csharp
public string DomainGuid { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `DomainSid`<sup>Required</sup> <a name="DomainSid" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.domainSid"></a>

```csharp
public string DomainSid { get; }
```

- *Type:* string

---

##### `ForestName`<sup>Required</sup> <a name="ForestName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.forestName"></a>

```csharp
public string ForestName { get; }
```

- *Type:* string

---

##### `NetbiosDomainName`<sup>Required</sup> <a name="NetbiosDomainName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.netbiosDomainName"></a>

```csharp
public string NetbiosDomainName { get; }
```

- *Type:* string

---

##### `StorageSid`<sup>Required</sup> <a name="StorageSid" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.storageSid"></a>

```csharp
public string StorageSid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryOutputReference.property.internalValue"></a>

```csharp
public DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory">DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectory</a>

---


### DataAzurermStorageAccountAzureFilesAuthenticationList <a name="DataAzurermStorageAccountAzureFilesAuthenticationList" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountAzureFilesAuthenticationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.get"></a>

```csharp
private DataAzurermStorageAccountAzureFilesAuthenticationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermStorageAccountAzureFilesAuthenticationOutputReference <a name="DataAzurermStorageAccountAzureFilesAuthenticationOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountAzureFilesAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList">DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.directoryType">DirectoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthentication">DataAzurermStorageAccountAzureFilesAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.activeDirectory"></a>

```csharp
public DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList ActiveDirectory { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList">DataAzurermStorageAccountAzureFilesAuthenticationActiveDirectoryList</a>

---

##### `DirectoryType`<sup>Required</sup> <a name="DirectoryType" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.directoryType"></a>

```csharp
public string DirectoryType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthenticationOutputReference.property.internalValue"></a>

```csharp
public DataAzurermStorageAccountAzureFilesAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountAzureFilesAuthentication">DataAzurermStorageAccountAzureFilesAuthentication</a>

---


### DataAzurermStorageAccountCustomDomainList <a name="DataAzurermStorageAccountCustomDomainList" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountCustomDomainList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.get"></a>

```csharp
private DataAzurermStorageAccountCustomDomainOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermStorageAccountCustomDomainOutputReference <a name="DataAzurermStorageAccountCustomDomainOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountCustomDomainOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomain">DataAzurermStorageAccountCustomDomain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomainOutputReference.property.internalValue"></a>

```csharp
public DataAzurermStorageAccountCustomDomain InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountCustomDomain">DataAzurermStorageAccountCustomDomain</a>

---


### DataAzurermStorageAccountIdentityList <a name="DataAzurermStorageAccountIdentityList" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.get"></a>

```csharp
private DataAzurermStorageAccountIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermStorageAccountIdentityOutputReference <a name="DataAzurermStorageAccountIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentity">DataAzurermStorageAccountIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentityOutputReference.property.internalValue"></a>

```csharp
public DataAzurermStorageAccountIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountIdentity">DataAzurermStorageAccountIdentity</a>

---


### DataAzurermStorageAccountTimeoutsOutputReference <a name="DataAzurermStorageAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermStorageAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermStorageAccount.DataAzurermStorageAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



