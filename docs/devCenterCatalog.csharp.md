# `devCenterCatalog` Submodule <a name="`devCenterCatalog` Submodule" id="@cdktf/provider-azurerm.devCenterCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevCenterCatalog <a name="DevCenterCatalog" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog azurerm_dev_center_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DevCenterCatalog(Construct Scope, string Id, DevCenterCatalogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig">DevCenterCatalogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig">DevCenterCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogAdogit">PutCatalogAdogit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogGithub">PutCatalogGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetCatalogAdogit">ResetCatalogAdogit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetCatalogGithub">ResetCatalogGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCatalogAdogit` <a name="PutCatalogAdogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogAdogit"></a>

```csharp
private void PutCatalogAdogit(DevCenterCatalogCatalogAdogit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogAdogit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a>

---

##### `PutCatalogGithub` <a name="PutCatalogGithub" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogGithub"></a>

```csharp
private void PutCatalogGithub(DevCenterCatalogCatalogGithub Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putCatalogGithub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putTimeouts"></a>

```csharp
private void PutTimeouts(DevCenterCatalogTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a>

---

##### `ResetCatalogAdogit` <a name="ResetCatalogAdogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetCatalogAdogit"></a>

```csharp
private void ResetCatalogAdogit()
```

##### `ResetCatalogGithub` <a name="ResetCatalogGithub" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetCatalogGithub"></a>

```csharp
private void ResetCatalogGithub()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DevCenterCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DevCenterCatalog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DevCenterCatalog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DevCenterCatalog.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DevCenterCatalog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DevCenterCatalog resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevCenterCatalog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevCenterCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DevCenterCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogAdogit">CatalogAdogit</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference">DevCenterCatalogCatalogAdogitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogGithub">CatalogGithub</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference">DevCenterCatalogCatalogGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference">DevCenterCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogAdogitInput">CatalogAdogitInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogGithubInput">CatalogGithubInput</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.devCenterIdInput">DevCenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.devCenterId">DevCenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CatalogAdogit`<sup>Required</sup> <a name="CatalogAdogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogAdogit"></a>

```csharp
public DevCenterCatalogCatalogAdogitOutputReference CatalogAdogit { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference">DevCenterCatalogCatalogAdogitOutputReference</a>

---

##### `CatalogGithub`<sup>Required</sup> <a name="CatalogGithub" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogGithub"></a>

```csharp
public DevCenterCatalogCatalogGithubOutputReference CatalogGithub { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference">DevCenterCatalogCatalogGithubOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.timeouts"></a>

```csharp
public DevCenterCatalogTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference">DevCenterCatalogTimeoutsOutputReference</a>

---

##### `CatalogAdogitInput`<sup>Optional</sup> <a name="CatalogAdogitInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogAdogitInput"></a>

```csharp
public DevCenterCatalogCatalogAdogit CatalogAdogitInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a>

---

##### `CatalogGithubInput`<sup>Optional</sup> <a name="CatalogGithubInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.catalogGithubInput"></a>

```csharp
public DevCenterCatalogCatalogGithub CatalogGithubInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a>

---

##### `DevCenterIdInput`<sup>Optional</sup> <a name="DevCenterIdInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.devCenterIdInput"></a>

```csharp
public string DevCenterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DevCenterId`<sup>Required</sup> <a name="DevCenterId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.devCenterId"></a>

```csharp
public string DevCenterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevCenterCatalogCatalogAdogit <a name="DevCenterCatalogCatalogAdogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DevCenterCatalogCatalogAdogit {
    string Branch,
    string KeyVaultKeyUrl,
    string Path,
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#branch DevCenterCatalog#branch}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.keyVaultKeyUrl">KeyVaultKeyUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#key_vault_key_url DevCenterCatalog#key_vault_key_url}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#path DevCenterCatalog#path}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#uri DevCenterCatalog#uri}. |

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#branch DevCenterCatalog#branch}.

---

##### `KeyVaultKeyUrl`<sup>Required</sup> <a name="KeyVaultKeyUrl" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.keyVaultKeyUrl"></a>

```csharp
public string KeyVaultKeyUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#key_vault_key_url DevCenterCatalog#key_vault_key_url}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#path DevCenterCatalog#path}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#uri DevCenterCatalog#uri}.

---

### DevCenterCatalogCatalogGithub <a name="DevCenterCatalogCatalogGithub" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DevCenterCatalogCatalogGithub {
    string Branch,
    string KeyVaultKeyUrl,
    string Path,
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#branch DevCenterCatalog#branch}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.keyVaultKeyUrl">KeyVaultKeyUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#key_vault_key_url DevCenterCatalog#key_vault_key_url}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#path DevCenterCatalog#path}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#uri DevCenterCatalog#uri}. |

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#branch DevCenterCatalog#branch}.

---

##### `KeyVaultKeyUrl`<sup>Required</sup> <a name="KeyVaultKeyUrl" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.keyVaultKeyUrl"></a>

```csharp
public string KeyVaultKeyUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#key_vault_key_url DevCenterCatalog#key_vault_key_url}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#path DevCenterCatalog#path}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#uri DevCenterCatalog#uri}.

---

### DevCenterCatalogConfig <a name="DevCenterCatalogConfig" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DevCenterCatalogConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DevCenterId,
    string Name,
    string ResourceGroupName,
    DevCenterCatalogCatalogAdogit CatalogAdogit = null,
    DevCenterCatalogCatalogGithub CatalogGithub = null,
    string Id = null,
    DevCenterCatalogTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.devCenterId">DevCenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#dev_center_id DevCenterCatalog#dev_center_id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#name DevCenterCatalog#name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#resource_group_name DevCenterCatalog#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.catalogAdogit">CatalogAdogit</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a></code> | catalog_adogit block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.catalogGithub">CatalogGithub</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a></code> | catalog_github block. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#id DevCenterCatalog#id}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DevCenterId`<sup>Required</sup> <a name="DevCenterId" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.devCenterId"></a>

```csharp
public string DevCenterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#dev_center_id DevCenterCatalog#dev_center_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#name DevCenterCatalog#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#resource_group_name DevCenterCatalog#resource_group_name}.

---

##### `CatalogAdogit`<sup>Optional</sup> <a name="CatalogAdogit" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.catalogAdogit"></a>

```csharp
public DevCenterCatalogCatalogAdogit CatalogAdogit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a>

catalog_adogit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#catalog_adogit DevCenterCatalog#catalog_adogit}

---

##### `CatalogGithub`<sup>Optional</sup> <a name="CatalogGithub" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.catalogGithub"></a>

```csharp
public DevCenterCatalogCatalogGithub CatalogGithub { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a>

catalog_github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#catalog_github DevCenterCatalog#catalog_github}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#id DevCenterCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogConfig.property.timeouts"></a>

```csharp
public DevCenterCatalogTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts">DevCenterCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#timeouts DevCenterCatalog#timeouts}

---

### DevCenterCatalogTimeouts <a name="DevCenterCatalogTimeouts" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DevCenterCatalogTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#create DevCenterCatalog#create}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#delete DevCenterCatalog#delete}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#read DevCenterCatalog#read}. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#update DevCenterCatalog#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#create DevCenterCatalog#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#delete DevCenterCatalog#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#read DevCenterCatalog#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/dev_center_catalog#update DevCenterCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevCenterCatalogCatalogAdogitOutputReference <a name="DevCenterCatalogCatalogAdogitOutputReference" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DevCenterCatalogCatalogAdogitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.keyVaultKeyUrlInput">KeyVaultKeyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.keyVaultKeyUrl">KeyVaultKeyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyUrlInput`<sup>Optional</sup> <a name="KeyVaultKeyUrlInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.keyVaultKeyUrlInput"></a>

```csharp
public string KeyVaultKeyUrlInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `KeyVaultKeyUrl`<sup>Required</sup> <a name="KeyVaultKeyUrl" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.keyVaultKeyUrl"></a>

```csharp
public string KeyVaultKeyUrl { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogitOutputReference.property.internalValue"></a>

```csharp
public DevCenterCatalogCatalogAdogit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogAdogit">DevCenterCatalogCatalogAdogit</a>

---


### DevCenterCatalogCatalogGithubOutputReference <a name="DevCenterCatalogCatalogGithubOutputReference" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DevCenterCatalogCatalogGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.keyVaultKeyUrlInput">KeyVaultKeyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.keyVaultKeyUrl">KeyVaultKeyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyUrlInput`<sup>Optional</sup> <a name="KeyVaultKeyUrlInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.keyVaultKeyUrlInput"></a>

```csharp
public string KeyVaultKeyUrlInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `KeyVaultKeyUrl`<sup>Required</sup> <a name="KeyVaultKeyUrl" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.keyVaultKeyUrl"></a>

```csharp
public string KeyVaultKeyUrl { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithubOutputReference.property.internalValue"></a>

```csharp
public DevCenterCatalogCatalogGithub InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogCatalogGithub">DevCenterCatalogCatalogGithub</a>

---


### DevCenterCatalogTimeoutsOutputReference <a name="DevCenterCatalogTimeoutsOutputReference" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DevCenterCatalogTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.devCenterCatalog.DevCenterCatalogTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



