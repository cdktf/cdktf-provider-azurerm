# `cosmosdbNotebookWorkspace` Submodule <a name="`cosmosdbNotebookWorkspace` Submodule" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbNotebookWorkspace <a name="CosmosdbNotebookWorkspace" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace azurerm_cosmosdb_notebook_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbNotebookWorkspace(Construct Scope, string Id, CosmosdbNotebookWorkspaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig">CosmosdbNotebookWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig">CosmosdbNotebookWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.putTimeouts"></a>

```csharp
private void PutTimeouts(CosmosdbNotebookWorkspaceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeouts">CosmosdbNotebookWorkspaceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbNotebookWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbNotebookWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbNotebookWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbNotebookWorkspace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbNotebookWorkspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CosmosdbNotebookWorkspace resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CosmosdbNotebookWorkspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CosmosdbNotebookWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbNotebookWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.serverEndpoint">ServerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference">CosmosdbNotebookWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ServerEndpoint`<sup>Required</sup> <a name="ServerEndpoint" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.serverEndpoint"></a>

```csharp
public string ServerEndpoint { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.timeouts"></a>

```csharp
public CosmosdbNotebookWorkspaceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference">CosmosdbNotebookWorkspaceTimeoutsOutputReference</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbNotebookWorkspaceConfig <a name="CosmosdbNotebookWorkspaceConfig" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbNotebookWorkspaceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountName,
    string Name,
    string ResourceGroupName,
    string Id = null,
    CosmosdbNotebookWorkspaceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#account_name CosmosdbNotebookWorkspace#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#name CosmosdbNotebookWorkspace#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#resource_group_name CosmosdbNotebookWorkspace#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#id CosmosdbNotebookWorkspace#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeouts">CosmosdbNotebookWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#account_name CosmosdbNotebookWorkspace#account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#name CosmosdbNotebookWorkspace#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#resource_group_name CosmosdbNotebookWorkspace#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#id CosmosdbNotebookWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceConfig.property.timeouts"></a>

```csharp
public CosmosdbNotebookWorkspaceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeouts">CosmosdbNotebookWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#timeouts CosmosdbNotebookWorkspace#timeouts}

---

### CosmosdbNotebookWorkspaceTimeouts <a name="CosmosdbNotebookWorkspaceTimeouts" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbNotebookWorkspaceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#create CosmosdbNotebookWorkspace#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#delete CosmosdbNotebookWorkspace#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#read CosmosdbNotebookWorkspace#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#create CosmosdbNotebookWorkspace#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#delete CosmosdbNotebookWorkspace#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/cosmosdb_notebook_workspace#read CosmosdbNotebookWorkspace#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbNotebookWorkspaceTimeoutsOutputReference <a name="CosmosdbNotebookWorkspaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbNotebookWorkspaceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbNotebookWorkspace.CosmosdbNotebookWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



