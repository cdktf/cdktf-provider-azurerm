# `dataAzurermContainerRegistryScopeMap` Submodule <a name="`dataAzurermContainerRegistryScopeMap` Submodule" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermContainerRegistryScopeMap <a name="DataAzurermContainerRegistryScopeMap" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/container_registry_scope_map azurerm_container_registry_scope_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermContainerRegistryScopeMap(Construct Scope, string Id, DataAzurermContainerRegistryScopeMapConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig">DataAzurermContainerRegistryScopeMapConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig">DataAzurermContainerRegistryScopeMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermContainerRegistryScopeMapTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermContainerRegistryScopeMap resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermContainerRegistryScopeMap.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermContainerRegistryScopeMap.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermContainerRegistryScopeMap.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermContainerRegistryScopeMap.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermContainerRegistryScopeMap resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermContainerRegistryScopeMap to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermContainerRegistryScopeMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/container_registry_scope_map#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermContainerRegistryScopeMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference">DataAzurermContainerRegistryScopeMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.containerRegistryNameInput">ContainerRegistryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.containerRegistryName">ContainerRegistryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.timeouts"></a>

```csharp
public DataAzurermContainerRegistryScopeMapTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference">DataAzurermContainerRegistryScopeMapTimeoutsOutputReference</a>

---

##### `ContainerRegistryNameInput`<sup>Optional</sup> <a name="ContainerRegistryNameInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.containerRegistryNameInput"></a>

```csharp
public string ContainerRegistryNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ContainerRegistryName`<sup>Required</sup> <a name="ContainerRegistryName" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.containerRegistryName"></a>

```csharp
public string ContainerRegistryName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMap.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermContainerRegistryScopeMapConfig <a name="DataAzurermContainerRegistryScopeMapConfig" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermContainerRegistryScopeMapConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContainerRegistryName,
    string Name,
    string ResourceGroupName,
    string Id = null,
    DataAzurermContainerRegistryScopeMapTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.containerRegistryName">ContainerRegistryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/container_registry_scope_map#container_registry_name DataAzurermContainerRegistryScopeMap#container_registry_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/container_registry_scope_map#name DataAzurermContainerRegistryScopeMap#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/container_registry_scope_map#resource_group_name DataAzurermContainerRegistryScopeMap#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/container_registry_scope_map#id DataAzurermContainerRegistryScopeMap#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContainerRegistryName`<sup>Required</sup> <a name="ContainerRegistryName" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.containerRegistryName"></a>

```csharp
public string ContainerRegistryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/container_registry_scope_map#container_registry_name DataAzurermContainerRegistryScopeMap#container_registry_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/container_registry_scope_map#name DataAzurermContainerRegistryScopeMap#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/container_registry_scope_map#resource_group_name DataAzurermContainerRegistryScopeMap#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/container_registry_scope_map#id DataAzurermContainerRegistryScopeMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapConfig.property.timeouts"></a>

```csharp
public DataAzurermContainerRegistryScopeMapTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts">DataAzurermContainerRegistryScopeMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/container_registry_scope_map#timeouts DataAzurermContainerRegistryScopeMap#timeouts}

---

### DataAzurermContainerRegistryScopeMapTimeouts <a name="DataAzurermContainerRegistryScopeMapTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermContainerRegistryScopeMapTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/container_registry_scope_map#read DataAzurermContainerRegistryScopeMap#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/container_registry_scope_map#read DataAzurermContainerRegistryScopeMap#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermContainerRegistryScopeMapTimeoutsOutputReference <a name="DataAzurermContainerRegistryScopeMapTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermContainerRegistryScopeMapTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryScopeMap.DataAzurermContainerRegistryScopeMapTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



