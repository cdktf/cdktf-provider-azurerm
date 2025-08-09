# `dataAzurermActiveDirectoryDomainService` Submodule <a name="`dataAzurermActiveDirectoryDomainService` Submodule" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermActiveDirectoryDomainService <a name="DataAzurermActiveDirectoryDomainService" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/active_directory_domain_service azurerm_active_directory_domain_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainService(Construct Scope, string Id, DataAzurermActiveDirectoryDomainServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig">DataAzurermActiveDirectoryDomainServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig">DataAzurermActiveDirectoryDomainServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermActiveDirectoryDomainServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts">DataAzurermActiveDirectoryDomainServiceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermActiveDirectoryDomainService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermActiveDirectoryDomainService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermActiveDirectoryDomainService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermActiveDirectoryDomainService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermActiveDirectoryDomainService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermActiveDirectoryDomainService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermActiveDirectoryDomainService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermActiveDirectoryDomainService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/active_directory_domain_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermActiveDirectoryDomainService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.domainConfigurationType">DomainConfigurationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.filteredSyncEnabled">FilteredSyncEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.notifications">Notifications</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList">DataAzurermActiveDirectoryDomainServiceNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.replicaSets">ReplicaSets</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList">DataAzurermActiveDirectoryDomainServiceReplicaSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.secureLdap">SecureLdap</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList">DataAzurermActiveDirectoryDomainServiceSecureLdapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList">DataAzurermActiveDirectoryDomainServiceSecurityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.syncOwner">SyncOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference">DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `DomainConfigurationType`<sup>Required</sup> <a name="DomainConfigurationType" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.domainConfigurationType"></a>

```csharp
public string DomainConfigurationType { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `FilteredSyncEnabled`<sup>Required</sup> <a name="FilteredSyncEnabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.filteredSyncEnabled"></a>

```csharp
public IResolvable FilteredSyncEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.notifications"></a>

```csharp
public DataAzurermActiveDirectoryDomainServiceNotificationsList Notifications { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList">DataAzurermActiveDirectoryDomainServiceNotificationsList</a>

---

##### `ReplicaSets`<sup>Required</sup> <a name="ReplicaSets" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.replicaSets"></a>

```csharp
public DataAzurermActiveDirectoryDomainServiceReplicaSetsList ReplicaSets { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList">DataAzurermActiveDirectoryDomainServiceReplicaSetsList</a>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `SecureLdap`<sup>Required</sup> <a name="SecureLdap" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.secureLdap"></a>

```csharp
public DataAzurermActiveDirectoryDomainServiceSecureLdapList SecureLdap { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList">DataAzurermActiveDirectoryDomainServiceSecureLdapList</a>

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.security"></a>

```csharp
public DataAzurermActiveDirectoryDomainServiceSecurityList Security { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList">DataAzurermActiveDirectoryDomainServiceSecurityList</a>

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `SyncOwner`<sup>Required</sup> <a name="SyncOwner" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.syncOwner"></a>

```csharp
public string SyncOwner { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.timeouts"></a>

```csharp
public DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference">DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermActiveDirectoryDomainServiceConfig <a name="DataAzurermActiveDirectoryDomainServiceConfig" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceConfig {
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
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    DataAzurermActiveDirectoryDomainServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/active_directory_domain_service#name DataAzurermActiveDirectoryDomainService#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/active_directory_domain_service#resource_group_name DataAzurermActiveDirectoryDomainService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/active_directory_domain_service#id DataAzurermActiveDirectoryDomainService#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/active_directory_domain_service#tags DataAzurermActiveDirectoryDomainService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts">DataAzurermActiveDirectoryDomainServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/active_directory_domain_service#name DataAzurermActiveDirectoryDomainService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/active_directory_domain_service#resource_group_name DataAzurermActiveDirectoryDomainService#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/active_directory_domain_service#id DataAzurermActiveDirectoryDomainService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/active_directory_domain_service#tags DataAzurermActiveDirectoryDomainService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceConfig.property.timeouts"></a>

```csharp
public DataAzurermActiveDirectoryDomainServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts">DataAzurermActiveDirectoryDomainServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/active_directory_domain_service#timeouts DataAzurermActiveDirectoryDomainService#timeouts}

---

### DataAzurermActiveDirectoryDomainServiceNotifications <a name="DataAzurermActiveDirectoryDomainServiceNotifications" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceNotifications {

};
```


### DataAzurermActiveDirectoryDomainServiceReplicaSets <a name="DataAzurermActiveDirectoryDomainServiceReplicaSets" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceReplicaSets {

};
```


### DataAzurermActiveDirectoryDomainServiceSecureLdap <a name="DataAzurermActiveDirectoryDomainServiceSecureLdap" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceSecureLdap {

};
```


### DataAzurermActiveDirectoryDomainServiceSecurity <a name="DataAzurermActiveDirectoryDomainServiceSecurity" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceSecurity {

};
```


### DataAzurermActiveDirectoryDomainServiceTimeouts <a name="DataAzurermActiveDirectoryDomainServiceTimeouts" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/active_directory_domain_service#read DataAzurermActiveDirectoryDomainService#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/active_directory_domain_service#read DataAzurermActiveDirectoryDomainService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermActiveDirectoryDomainServiceNotificationsList <a name="DataAzurermActiveDirectoryDomainServiceNotificationsList" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceNotificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.get"></a>

```csharp
private DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference <a name="DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipients">AdditionalRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdmins">NotifyDcAdmins</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdmins">NotifyGlobalAdmins</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotifications">DataAzurermActiveDirectoryDomainServiceNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalRecipients`<sup>Required</sup> <a name="AdditionalRecipients" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.additionalRecipients"></a>

```csharp
public string[] AdditionalRecipients { get; }
```

- *Type:* string[]

---

##### `NotifyDcAdmins`<sup>Required</sup> <a name="NotifyDcAdmins" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyDcAdmins"></a>

```csharp
public IResolvable NotifyDcAdmins { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NotifyGlobalAdmins`<sup>Required</sup> <a name="NotifyGlobalAdmins" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.notifyGlobalAdmins"></a>

```csharp
public IResolvable NotifyGlobalAdmins { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotificationsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermActiveDirectoryDomainServiceNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceNotifications">DataAzurermActiveDirectoryDomainServiceNotifications</a>

---


### DataAzurermActiveDirectoryDomainServiceReplicaSetsList <a name="DataAzurermActiveDirectoryDomainServiceReplicaSetsList" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceReplicaSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.get"></a>

```csharp
private DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference <a name="DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.domainControllerIpAddresses">DomainControllerIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.externalAccessIpAddress">ExternalAccessIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.serviceStatus">ServiceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSets">DataAzurermActiveDirectoryDomainServiceReplicaSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainControllerIpAddresses`<sup>Required</sup> <a name="DomainControllerIpAddresses" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.domainControllerIpAddresses"></a>

```csharp
public string[] DomainControllerIpAddresses { get; }
```

- *Type:* string[]

---

##### `ExternalAccessIpAddress`<sup>Required</sup> <a name="ExternalAccessIpAddress" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.externalAccessIpAddress"></a>

```csharp
public string ExternalAccessIpAddress { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ServiceStatus`<sup>Required</sup> <a name="ServiceStatus" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.serviceStatus"></a>

```csharp
public string ServiceStatus { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSetsOutputReference.property.internalValue"></a>

```csharp
public DataAzurermActiveDirectoryDomainServiceReplicaSets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceReplicaSets">DataAzurermActiveDirectoryDomainServiceReplicaSets</a>

---


### DataAzurermActiveDirectoryDomainServiceSecureLdapList <a name="DataAzurermActiveDirectoryDomainServiceSecureLdapList" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceSecureLdapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.get"></a>

```csharp
private DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference <a name="DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateExpiry">CertificateExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateThumbprint">CertificateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabled">ExternalAccessEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.publicCertificate">PublicCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdap">DataAzurermActiveDirectoryDomainServiceSecureLdap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateExpiry`<sup>Required</sup> <a name="CertificateExpiry" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateExpiry"></a>

```csharp
public string CertificateExpiry { get; }
```

- *Type:* string

---

##### `CertificateThumbprint`<sup>Required</sup> <a name="CertificateThumbprint" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.certificateThumbprint"></a>

```csharp
public string CertificateThumbprint { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ExternalAccessEnabled`<sup>Required</sup> <a name="ExternalAccessEnabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.externalAccessEnabled"></a>

```csharp
public IResolvable ExternalAccessEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PublicCertificate`<sup>Required</sup> <a name="PublicCertificate" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.publicCertificate"></a>

```csharp
public string PublicCertificate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdapOutputReference.property.internalValue"></a>

```csharp
public DataAzurermActiveDirectoryDomainServiceSecureLdap InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecureLdap">DataAzurermActiveDirectoryDomainServiceSecureLdap</a>

---


### DataAzurermActiveDirectoryDomainServiceSecurityList <a name="DataAzurermActiveDirectoryDomainServiceSecurityList" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceSecurityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.get"></a>

```csharp
private DataAzurermActiveDirectoryDomainServiceSecurityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermActiveDirectoryDomainServiceSecurityOutputReference <a name="DataAzurermActiveDirectoryDomainServiceSecurityOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceSecurityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabled">KerberosArmoringEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabled">KerberosRc4EncryptionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1Enabled">NtlmV1Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswords">SyncKerberosPasswords</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswords">SyncNtlmPasswords</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswords">SyncOnPremPasswords</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1Enabled">TlsV1Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurity">DataAzurermActiveDirectoryDomainServiceSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KerberosArmoringEnabled`<sup>Required</sup> <a name="KerberosArmoringEnabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosArmoringEnabled"></a>

```csharp
public IResolvable KerberosArmoringEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `KerberosRc4EncryptionEnabled`<sup>Required</sup> <a name="KerberosRc4EncryptionEnabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.kerberosRc4EncryptionEnabled"></a>

```csharp
public IResolvable KerberosRc4EncryptionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NtlmV1Enabled`<sup>Required</sup> <a name="NtlmV1Enabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.ntlmV1Enabled"></a>

```csharp
public IResolvable NtlmV1Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SyncKerberosPasswords`<sup>Required</sup> <a name="SyncKerberosPasswords" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncKerberosPasswords"></a>

```csharp
public IResolvable SyncKerberosPasswords { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SyncNtlmPasswords`<sup>Required</sup> <a name="SyncNtlmPasswords" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncNtlmPasswords"></a>

```csharp
public IResolvable SyncNtlmPasswords { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SyncOnPremPasswords`<sup>Required</sup> <a name="SyncOnPremPasswords" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.syncOnPremPasswords"></a>

```csharp
public IResolvable SyncOnPremPasswords { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TlsV1Enabled`<sup>Required</sup> <a name="TlsV1Enabled" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.tlsV1Enabled"></a>

```csharp
public IResolvable TlsV1Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurityOutputReference.property.internalValue"></a>

```csharp
public DataAzurermActiveDirectoryDomainServiceSecurity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceSecurity">DataAzurermActiveDirectoryDomainServiceSecurity</a>

---


### DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference <a name="DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermActiveDirectoryDomainService.DataAzurermActiveDirectoryDomainServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



