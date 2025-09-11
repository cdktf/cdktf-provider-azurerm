# `dataAzurermVirtualDesktopHostPool` Submodule <a name="`dataAzurermVirtualDesktopHostPool` Submodule" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVirtualDesktopHostPool <a name="DataAzurermVirtualDesktopHostPool" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/virtual_desktop_host_pool azurerm_virtual_desktop_host_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVirtualDesktopHostPool(Construct Scope, string Id, DataAzurermVirtualDesktopHostPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig">DataAzurermVirtualDesktopHostPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig">DataAzurermVirtualDesktopHostPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermVirtualDesktopHostPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts">DataAzurermVirtualDesktopHostPoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermVirtualDesktopHostPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermVirtualDesktopHostPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermVirtualDesktopHostPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermVirtualDesktopHostPool.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermVirtualDesktopHostPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermVirtualDesktopHostPool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermVirtualDesktopHostPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermVirtualDesktopHostPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/virtual_desktop_host_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermVirtualDesktopHostPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.customRdpProperties">CustomRdpProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.friendlyName">FriendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.loadBalancerType">LoadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.maximumSessionsAllowed">MaximumSessionsAllowed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.personalDesktopAssignmentType">PersonalDesktopAssignmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.preferredAppGroupType">PreferredAppGroupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.scheduledAgentUpdates">ScheduledAgentUpdates</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.startVmOnConnect">StartVmOnConnect</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference">DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.validateEnvironment">ValidateEnvironment</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CustomRdpProperties`<sup>Required</sup> <a name="CustomRdpProperties" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.customRdpProperties"></a>

```csharp
public string CustomRdpProperties { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.friendlyName"></a>

```csharp
public string FriendlyName { get; }
```

- *Type:* string

---

##### `LoadBalancerType`<sup>Required</sup> <a name="LoadBalancerType" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.loadBalancerType"></a>

```csharp
public string LoadBalancerType { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MaximumSessionsAllowed`<sup>Required</sup> <a name="MaximumSessionsAllowed" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.maximumSessionsAllowed"></a>

```csharp
public double MaximumSessionsAllowed { get; }
```

- *Type:* double

---

##### `PersonalDesktopAssignmentType`<sup>Required</sup> <a name="PersonalDesktopAssignmentType" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.personalDesktopAssignmentType"></a>

```csharp
public string PersonalDesktopAssignmentType { get; }
```

- *Type:* string

---

##### `PreferredAppGroupType`<sup>Required</sup> <a name="PreferredAppGroupType" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.preferredAppGroupType"></a>

```csharp
public string PreferredAppGroupType { get; }
```

- *Type:* string

---

##### `ScheduledAgentUpdates`<sup>Required</sup> <a name="ScheduledAgentUpdates" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.scheduledAgentUpdates"></a>

```csharp
public DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList ScheduledAgentUpdates { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList</a>

---

##### `StartVmOnConnect`<sup>Required</sup> <a name="StartVmOnConnect" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.startVmOnConnect"></a>

```csharp
public IResolvable StartVmOnConnect { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.timeouts"></a>

```csharp
public DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference">DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ValidateEnvironment`<sup>Required</sup> <a name="ValidateEnvironment" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.validateEnvironment"></a>

```csharp
public IResolvable ValidateEnvironment { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVirtualDesktopHostPoolConfig <a name="DataAzurermVirtualDesktopHostPoolConfig" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVirtualDesktopHostPoolConfig {
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
    DataAzurermVirtualDesktopHostPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/virtual_desktop_host_pool#name DataAzurermVirtualDesktopHostPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/virtual_desktop_host_pool#resource_group_name DataAzurermVirtualDesktopHostPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/virtual_desktop_host_pool#id DataAzurermVirtualDesktopHostPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts">DataAzurermVirtualDesktopHostPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/virtual_desktop_host_pool#name DataAzurermVirtualDesktopHostPool#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/virtual_desktop_host_pool#resource_group_name DataAzurermVirtualDesktopHostPool#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/virtual_desktop_host_pool#id DataAzurermVirtualDesktopHostPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.timeouts"></a>

```csharp
public DataAzurermVirtualDesktopHostPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts">DataAzurermVirtualDesktopHostPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/virtual_desktop_host_pool#timeouts DataAzurermVirtualDesktopHostPool#timeouts}

---

### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates {

};
```


### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule {

};
```


### DataAzurermVirtualDesktopHostPoolTimeouts <a name="DataAzurermVirtualDesktopHostPoolTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVirtualDesktopHostPoolTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/virtual_desktop_host_pool#read DataAzurermVirtualDesktopHostPool#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/virtual_desktop_host_pool#read DataAzurermVirtualDesktopHostPool#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.get"></a>

```csharp
private DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.useSessionHostTimezone">UseSessionHostTimezone</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.schedule"></a>

```csharp
public DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList</a>

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `UseSessionHostTimezone`<sup>Required</sup> <a name="UseSessionHostTimezone" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.useSessionHostTimezone"></a>

```csharp
public IResolvable UseSessionHostTimezone { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.internalValue"></a>

```csharp
public DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates</a>

---


### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get"></a>

```csharp
private DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.hourOfDay"></a>

```csharp
public double HourOfDay { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>

---


### DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference <a name="DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



