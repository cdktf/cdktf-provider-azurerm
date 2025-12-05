# `apiManagementWorkspaceApiVersionSet` Submodule <a name="`apiManagementWorkspaceApiVersionSet` Submodule" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementWorkspaceApiVersionSet <a name="ApiManagementWorkspaceApiVersionSet" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set azurerm_api_management_workspace_api_version_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementWorkspaceApiVersionSet(Construct Scope, string Id, ApiManagementWorkspaceApiVersionSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig">ApiManagementWorkspaceApiVersionSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig">ApiManagementWorkspaceApiVersionSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.resetVersionHeaderName">ResetVersionHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.resetVersionQueryName">ResetVersionQueryName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.putTimeouts"></a>

```csharp
private void PutTimeouts(ApiManagementWorkspaceApiVersionSetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts">ApiManagementWorkspaceApiVersionSetTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersionHeaderName` <a name="ResetVersionHeaderName" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.resetVersionHeaderName"></a>

```csharp
private void ResetVersionHeaderName()
```

##### `ResetVersionQueryName` <a name="ResetVersionQueryName" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.resetVersionQueryName"></a>

```csharp
private void ResetVersionQueryName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApiManagementWorkspaceApiVersionSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementWorkspaceApiVersionSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementWorkspaceApiVersionSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementWorkspaceApiVersionSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ApiManagementWorkspaceApiVersionSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApiManagementWorkspaceApiVersionSet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiManagementWorkspaceApiVersionSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiManagementWorkspaceApiVersionSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementWorkspaceApiVersionSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference">ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.apiManagementWorkspaceIdInput">ApiManagementWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts">ApiManagementWorkspaceApiVersionSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.versionHeaderNameInput">VersionHeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.versioningSchemeInput">VersioningSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.versionQueryNameInput">VersionQueryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.apiManagementWorkspaceId">ApiManagementWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.versionHeaderName">VersionHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.versioningScheme">VersioningScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.versionQueryName">VersionQueryName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.timeouts"></a>

```csharp
public ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference">ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference</a>

---

##### `ApiManagementWorkspaceIdInput`<sup>Optional</sup> <a name="ApiManagementWorkspaceIdInput" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.apiManagementWorkspaceIdInput"></a>

```csharp
public string ApiManagementWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.timeoutsInput"></a>

```csharp
public IResolvable|ApiManagementWorkspaceApiVersionSetTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts">ApiManagementWorkspaceApiVersionSetTimeouts</a>

---

##### `VersionHeaderNameInput`<sup>Optional</sup> <a name="VersionHeaderNameInput" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.versionHeaderNameInput"></a>

```csharp
public string VersionHeaderNameInput { get; }
```

- *Type:* string

---

##### `VersioningSchemeInput`<sup>Optional</sup> <a name="VersioningSchemeInput" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.versioningSchemeInput"></a>

```csharp
public string VersioningSchemeInput { get; }
```

- *Type:* string

---

##### `VersionQueryNameInput`<sup>Optional</sup> <a name="VersionQueryNameInput" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.versionQueryNameInput"></a>

```csharp
public string VersionQueryNameInput { get; }
```

- *Type:* string

---

##### `ApiManagementWorkspaceId`<sup>Required</sup> <a name="ApiManagementWorkspaceId" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.apiManagementWorkspaceId"></a>

```csharp
public string ApiManagementWorkspaceId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `VersionHeaderName`<sup>Required</sup> <a name="VersionHeaderName" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.versionHeaderName"></a>

```csharp
public string VersionHeaderName { get; }
```

- *Type:* string

---

##### `VersioningScheme`<sup>Required</sup> <a name="VersioningScheme" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.versioningScheme"></a>

```csharp
public string VersioningScheme { get; }
```

- *Type:* string

---

##### `VersionQueryName`<sup>Required</sup> <a name="VersionQueryName" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.versionQueryName"></a>

```csharp
public string VersionQueryName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementWorkspaceApiVersionSetConfig <a name="ApiManagementWorkspaceApiVersionSetConfig" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementWorkspaceApiVersionSetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApiManagementWorkspaceId,
    string DisplayName,
    string Name,
    string VersioningScheme,
    string Description = null,
    string Id = null,
    ApiManagementWorkspaceApiVersionSetTimeouts Timeouts = null,
    string VersionHeaderName = null,
    string VersionQueryName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.apiManagementWorkspaceId">ApiManagementWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#api_management_workspace_id ApiManagementWorkspaceApiVersionSet#api_management_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#display_name ApiManagementWorkspaceApiVersionSet#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#name ApiManagementWorkspaceApiVersionSet#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.versioningScheme">VersioningScheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#versioning_scheme ApiManagementWorkspaceApiVersionSet#versioning_scheme}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#description ApiManagementWorkspaceApiVersionSet#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#id ApiManagementWorkspaceApiVersionSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts">ApiManagementWorkspaceApiVersionSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.versionHeaderName">VersionHeaderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#version_header_name ApiManagementWorkspaceApiVersionSet#version_header_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.versionQueryName">VersionQueryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#version_query_name ApiManagementWorkspaceApiVersionSet#version_query_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ApiManagementWorkspaceId`<sup>Required</sup> <a name="ApiManagementWorkspaceId" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.apiManagementWorkspaceId"></a>

```csharp
public string ApiManagementWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#api_management_workspace_id ApiManagementWorkspaceApiVersionSet#api_management_workspace_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#display_name ApiManagementWorkspaceApiVersionSet#display_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#name ApiManagementWorkspaceApiVersionSet#name}.

---

##### `VersioningScheme`<sup>Required</sup> <a name="VersioningScheme" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.versioningScheme"></a>

```csharp
public string VersioningScheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#versioning_scheme ApiManagementWorkspaceApiVersionSet#versioning_scheme}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#description ApiManagementWorkspaceApiVersionSet#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#id ApiManagementWorkspaceApiVersionSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.timeouts"></a>

```csharp
public ApiManagementWorkspaceApiVersionSetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts">ApiManagementWorkspaceApiVersionSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#timeouts ApiManagementWorkspaceApiVersionSet#timeouts}

---

##### `VersionHeaderName`<sup>Optional</sup> <a name="VersionHeaderName" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.versionHeaderName"></a>

```csharp
public string VersionHeaderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#version_header_name ApiManagementWorkspaceApiVersionSet#version_header_name}.

---

##### `VersionQueryName`<sup>Optional</sup> <a name="VersionQueryName" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetConfig.property.versionQueryName"></a>

```csharp
public string VersionQueryName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#version_query_name ApiManagementWorkspaceApiVersionSet#version_query_name}.

---

### ApiManagementWorkspaceApiVersionSetTimeouts <a name="ApiManagementWorkspaceApiVersionSetTimeouts" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementWorkspaceApiVersionSetTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#create ApiManagementWorkspaceApiVersionSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#delete ApiManagementWorkspaceApiVersionSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#read ApiManagementWorkspaceApiVersionSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#update ApiManagementWorkspaceApiVersionSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#create ApiManagementWorkspaceApiVersionSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#delete ApiManagementWorkspaceApiVersionSet#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#read ApiManagementWorkspaceApiVersionSet#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.55.0/docs/resources/api_management_workspace_api_version_set#update ApiManagementWorkspaceApiVersionSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference <a name="ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts">ApiManagementWorkspaceApiVersionSetTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApiManagementWorkspaceApiVersionSetTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.apiManagementWorkspaceApiVersionSet.ApiManagementWorkspaceApiVersionSetTimeouts">ApiManagementWorkspaceApiVersionSetTimeouts</a>

---



