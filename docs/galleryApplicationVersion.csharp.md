# `galleryApplicationVersion` Submodule <a name="`galleryApplicationVersion` Submodule" id="@cdktf/provider-azurerm.galleryApplicationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GalleryApplicationVersion <a name="GalleryApplicationVersion" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version azurerm_gallery_application_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new GalleryApplicationVersion(Construct Scope, string Id, GalleryApplicationVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig">GalleryApplicationVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig">GalleryApplicationVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putManageAction">PutManageAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTargetRegion">PutTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetConfigFile">ResetConfigFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEnableHealthCheck">ResetEnableHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEndOfLifeDate">ResetEndOfLifeDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetExcludeFromLatest">ResetExcludeFromLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetPackageFile">ResetPackageFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManageAction` <a name="PutManageAction" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putManageAction"></a>

```csharp
private void PutManageAction(GalleryApplicationVersionManageAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putManageAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putSource"></a>

```csharp
private void PutSource(GalleryApplicationVersionSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

---

##### `PutTargetRegion` <a name="PutTargetRegion" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTargetRegion"></a>

```csharp
private void PutTargetRegion(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTargetRegion.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTimeouts"></a>

```csharp
private void PutTimeouts(GalleryApplicationVersionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a>

---

##### `ResetConfigFile` <a name="ResetConfigFile" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetConfigFile"></a>

```csharp
private void ResetConfigFile()
```

##### `ResetEnableHealthCheck` <a name="ResetEnableHealthCheck" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEnableHealthCheck"></a>

```csharp
private void ResetEnableHealthCheck()
```

##### `ResetEndOfLifeDate` <a name="ResetEndOfLifeDate" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetEndOfLifeDate"></a>

```csharp
private void ResetEndOfLifeDate()
```

##### `ResetExcludeFromLatest` <a name="ResetExcludeFromLatest" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetExcludeFromLatest"></a>

```csharp
private void ResetExcludeFromLatest()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPackageFile` <a name="ResetPackageFile" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetPackageFile"></a>

```csharp
private void ResetPackageFile()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GalleryApplicationVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

GalleryApplicationVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

GalleryApplicationVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

GalleryApplicationVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

GalleryApplicationVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GalleryApplicationVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GalleryApplicationVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GalleryApplicationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GalleryApplicationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageAction">ManageAction</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference">GalleryApplicationVersionManageActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference">GalleryApplicationVersionSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegion">TargetRegion</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList">GalleryApplicationVersionTargetRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference">GalleryApplicationVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFileInput">ConfigFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheckInput">EnableHealthCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDateInput">EndOfLifeDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatestInput">ExcludeFromLatestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationIdInput">GalleryApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageActionInput">ManageActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFileInput">PackageFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegionInput">TargetRegionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFile">ConfigFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheck">EnableHealthCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDate">EndOfLifeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationId">GalleryApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFile">PackageFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ManageAction`<sup>Required</sup> <a name="ManageAction" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageAction"></a>

```csharp
public GalleryApplicationVersionManageActionOutputReference ManageAction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference">GalleryApplicationVersionManageActionOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.source"></a>

```csharp
public GalleryApplicationVersionSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference">GalleryApplicationVersionSourceOutputReference</a>

---

##### `TargetRegion`<sup>Required</sup> <a name="TargetRegion" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegion"></a>

```csharp
public GalleryApplicationVersionTargetRegionList TargetRegion { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList">GalleryApplicationVersionTargetRegionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeouts"></a>

```csharp
public GalleryApplicationVersionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference">GalleryApplicationVersionTimeoutsOutputReference</a>

---

##### `ConfigFileInput`<sup>Optional</sup> <a name="ConfigFileInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFileInput"></a>

```csharp
public string ConfigFileInput { get; }
```

- *Type:* string

---

##### `EnableHealthCheckInput`<sup>Optional</sup> <a name="EnableHealthCheckInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheckInput"></a>

```csharp
public object EnableHealthCheckInput { get; }
```

- *Type:* object

---

##### `EndOfLifeDateInput`<sup>Optional</sup> <a name="EndOfLifeDateInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDateInput"></a>

```csharp
public string EndOfLifeDateInput { get; }
```

- *Type:* string

---

##### `ExcludeFromLatestInput`<sup>Optional</sup> <a name="ExcludeFromLatestInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatestInput"></a>

```csharp
public object ExcludeFromLatestInput { get; }
```

- *Type:* object

---

##### `GalleryApplicationIdInput`<sup>Optional</sup> <a name="GalleryApplicationIdInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationIdInput"></a>

```csharp
public string GalleryApplicationIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManageActionInput`<sup>Optional</sup> <a name="ManageActionInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.manageActionInput"></a>

```csharp
public GalleryApplicationVersionManageAction ManageActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PackageFileInput`<sup>Optional</sup> <a name="PackageFileInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFileInput"></a>

```csharp
public string PackageFileInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.sourceInput"></a>

```csharp
public GalleryApplicationVersionSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetRegionInput`<sup>Optional</sup> <a name="TargetRegionInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.targetRegionInput"></a>

```csharp
public object TargetRegionInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ConfigFile`<sup>Required</sup> <a name="ConfigFile" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.configFile"></a>

```csharp
public string ConfigFile { get; }
```

- *Type:* string

---

##### `EnableHealthCheck`<sup>Required</sup> <a name="EnableHealthCheck" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.enableHealthCheck"></a>

```csharp
public object EnableHealthCheck { get; }
```

- *Type:* object

---

##### `EndOfLifeDate`<sup>Required</sup> <a name="EndOfLifeDate" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.endOfLifeDate"></a>

```csharp
public string EndOfLifeDate { get; }
```

- *Type:* string

---

##### `ExcludeFromLatest`<sup>Required</sup> <a name="ExcludeFromLatest" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.excludeFromLatest"></a>

```csharp
public object ExcludeFromLatest { get; }
```

- *Type:* object

---

##### `GalleryApplicationId`<sup>Required</sup> <a name="GalleryApplicationId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.galleryApplicationId"></a>

```csharp
public string GalleryApplicationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PackageFile`<sup>Required</sup> <a name="PackageFile" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.packageFile"></a>

```csharp
public string PackageFile { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GalleryApplicationVersionConfig <a name="GalleryApplicationVersionConfig" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new GalleryApplicationVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GalleryApplicationId,
    string Location,
    GalleryApplicationVersionManageAction ManageAction,
    string Name,
    GalleryApplicationVersionSource Source,
    object TargetRegion,
    string ConfigFile = null,
    object EnableHealthCheck = null,
    string EndOfLifeDate = null,
    object ExcludeFromLatest = null,
    string Id = null,
    string PackageFile = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    GalleryApplicationVersionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.galleryApplicationId">GalleryApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#gallery_application_id GalleryApplicationVersion#gallery_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#location GalleryApplicationVersion#location}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.manageAction">ManageAction</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a></code> | manage_action block. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.targetRegion">TargetRegion</a></code> | <code>object</code> | target_region block. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.configFile">ConfigFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#config_file GalleryApplicationVersion#config_file}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.enableHealthCheck">EnableHealthCheck</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#enable_health_check GalleryApplicationVersion#enable_health_check}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.endOfLifeDate">EndOfLifeDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#end_of_life_date GalleryApplicationVersion#end_of_life_date}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#id GalleryApplicationVersion#id}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.packageFile">PackageFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#package_file GalleryApplicationVersion#package_file}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#tags GalleryApplicationVersion#tags}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GalleryApplicationId`<sup>Required</sup> <a name="GalleryApplicationId" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.galleryApplicationId"></a>

```csharp
public string GalleryApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#gallery_application_id GalleryApplicationVersion#gallery_application_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#location GalleryApplicationVersion#location}.

---

##### `ManageAction`<sup>Required</sup> <a name="ManageAction" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.manageAction"></a>

```csharp
public GalleryApplicationVersionManageAction ManageAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

manage_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#manage_action GalleryApplicationVersion#manage_action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.source"></a>

```csharp
public GalleryApplicationVersionSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#source GalleryApplicationVersion#source}

---

##### `TargetRegion`<sup>Required</sup> <a name="TargetRegion" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.targetRegion"></a>

```csharp
public object TargetRegion { get; set; }
```

- *Type:* object

target_region block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#target_region GalleryApplicationVersion#target_region}

---

##### `ConfigFile`<sup>Optional</sup> <a name="ConfigFile" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.configFile"></a>

```csharp
public string ConfigFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#config_file GalleryApplicationVersion#config_file}.

---

##### `EnableHealthCheck`<sup>Optional</sup> <a name="EnableHealthCheck" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.enableHealthCheck"></a>

```csharp
public object EnableHealthCheck { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#enable_health_check GalleryApplicationVersion#enable_health_check}.

---

##### `EndOfLifeDate`<sup>Optional</sup> <a name="EndOfLifeDate" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.endOfLifeDate"></a>

```csharp
public string EndOfLifeDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#end_of_life_date GalleryApplicationVersion#end_of_life_date}.

---

##### `ExcludeFromLatest`<sup>Optional</sup> <a name="ExcludeFromLatest" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.excludeFromLatest"></a>

```csharp
public object ExcludeFromLatest { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#id GalleryApplicationVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PackageFile`<sup>Optional</sup> <a name="PackageFile" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.packageFile"></a>

```csharp
public string PackageFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#package_file GalleryApplicationVersion#package_file}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#tags GalleryApplicationVersion#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionConfig.property.timeouts"></a>

```csharp
public GalleryApplicationVersionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts">GalleryApplicationVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#timeouts GalleryApplicationVersion#timeouts}

---

### GalleryApplicationVersionManageAction <a name="GalleryApplicationVersionManageAction" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new GalleryApplicationVersionManageAction {
    string Install,
    string Remove,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.install">Install</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#install GalleryApplicationVersion#install}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.remove">Remove</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#remove GalleryApplicationVersion#remove}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}. |

---

##### `Install`<sup>Required</sup> <a name="Install" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.install"></a>

```csharp
public string Install { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#install GalleryApplicationVersion#install}.

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.remove"></a>

```csharp
public string Remove { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#remove GalleryApplicationVersion#remove}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}.

---

### GalleryApplicationVersionSource <a name="GalleryApplicationVersionSource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new GalleryApplicationVersionSource {
    string MediaLink,
    string DefaultConfigurationLink = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.mediaLink">MediaLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#media_link GalleryApplicationVersion#media_link}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.defaultConfigurationLink">DefaultConfigurationLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#default_configuration_link GalleryApplicationVersion#default_configuration_link}. |

---

##### `MediaLink`<sup>Required</sup> <a name="MediaLink" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.mediaLink"></a>

```csharp
public string MediaLink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#media_link GalleryApplicationVersion#media_link}.

---

##### `DefaultConfigurationLink`<sup>Optional</sup> <a name="DefaultConfigurationLink" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource.property.defaultConfigurationLink"></a>

```csharp
public string DefaultConfigurationLink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#default_configuration_link GalleryApplicationVersion#default_configuration_link}.

---

### GalleryApplicationVersionTargetRegion <a name="GalleryApplicationVersionTargetRegion" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new GalleryApplicationVersionTargetRegion {
    string Name,
    double RegionalReplicaCount,
    object ExcludeFromLatest = null,
    string StorageAccountType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.regionalReplicaCount">RegionalReplicaCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#regional_replica_count GalleryApplicationVersion#regional_replica_count}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#storage_account_type GalleryApplicationVersion#storage_account_type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#name GalleryApplicationVersion#name}.

---

##### `RegionalReplicaCount`<sup>Required</sup> <a name="RegionalReplicaCount" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.regionalReplicaCount"></a>

```csharp
public double RegionalReplicaCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#regional_replica_count GalleryApplicationVersion#regional_replica_count}.

---

##### `ExcludeFromLatest`<sup>Optional</sup> <a name="ExcludeFromLatest" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.excludeFromLatest"></a>

```csharp
public object ExcludeFromLatest { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#exclude_from_latest GalleryApplicationVersion#exclude_from_latest}.

---

##### `StorageAccountType`<sup>Optional</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegion.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#storage_account_type GalleryApplicationVersion#storage_account_type}.

---

### GalleryApplicationVersionTimeouts <a name="GalleryApplicationVersionTimeouts" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new GalleryApplicationVersionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#create GalleryApplicationVersion#create}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#delete GalleryApplicationVersion#delete}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#read GalleryApplicationVersion#read}. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#create GalleryApplicationVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#delete GalleryApplicationVersion#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#read GalleryApplicationVersion#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/gallery_application_version#update GalleryApplicationVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GalleryApplicationVersionManageActionOutputReference <a name="GalleryApplicationVersionManageActionOutputReference" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new GalleryApplicationVersionManageActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.installInput">InstallInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.removeInput">RemoveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.install">Install</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.remove">Remove</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstallInput`<sup>Optional</sup> <a name="InstallInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.installInput"></a>

```csharp
public string InstallInput { get; }
```

- *Type:* string

---

##### `RemoveInput`<sup>Optional</sup> <a name="RemoveInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.removeInput"></a>

```csharp
public string RemoveInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Install`<sup>Required</sup> <a name="Install" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.install"></a>

```csharp
public string Install { get; }
```

- *Type:* string

---

##### `Remove`<sup>Required</sup> <a name="Remove" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.remove"></a>

```csharp
public string Remove { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageActionOutputReference.property.internalValue"></a>

```csharp
public GalleryApplicationVersionManageAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionManageAction">GalleryApplicationVersionManageAction</a>

---


### GalleryApplicationVersionSourceOutputReference <a name="GalleryApplicationVersionSourceOutputReference" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new GalleryApplicationVersionSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resetDefaultConfigurationLink">ResetDefaultConfigurationLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultConfigurationLink` <a name="ResetDefaultConfigurationLink" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.resetDefaultConfigurationLink"></a>

```csharp
private void ResetDefaultConfigurationLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLinkInput">DefaultConfigurationLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLinkInput">MediaLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLink">DefaultConfigurationLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLink">MediaLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultConfigurationLinkInput`<sup>Optional</sup> <a name="DefaultConfigurationLinkInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLinkInput"></a>

```csharp
public string DefaultConfigurationLinkInput { get; }
```

- *Type:* string

---

##### `MediaLinkInput`<sup>Optional</sup> <a name="MediaLinkInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLinkInput"></a>

```csharp
public string MediaLinkInput { get; }
```

- *Type:* string

---

##### `DefaultConfigurationLink`<sup>Required</sup> <a name="DefaultConfigurationLink" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.defaultConfigurationLink"></a>

```csharp
public string DefaultConfigurationLink { get; }
```

- *Type:* string

---

##### `MediaLink`<sup>Required</sup> <a name="MediaLink" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.mediaLink"></a>

```csharp
public string MediaLink { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSourceOutputReference.property.internalValue"></a>

```csharp
public GalleryApplicationVersionSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionSource">GalleryApplicationVersionSource</a>

---


### GalleryApplicationVersionTargetRegionList <a name="GalleryApplicationVersionTargetRegionList" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new GalleryApplicationVersionTargetRegionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.get"></a>

```csharp
private GalleryApplicationVersionTargetRegionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GalleryApplicationVersionTargetRegionOutputReference <a name="GalleryApplicationVersionTargetRegionOutputReference" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new GalleryApplicationVersionTargetRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetExcludeFromLatest">ResetExcludeFromLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetStorageAccountType">ResetStorageAccountType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeFromLatest` <a name="ResetExcludeFromLatest" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetExcludeFromLatest"></a>

```csharp
private void ResetExcludeFromLatest()
```

##### `ResetStorageAccountType` <a name="ResetStorageAccountType" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.resetStorageAccountType"></a>

```csharp
private void ResetStorageAccountType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatestInput">ExcludeFromLatestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCountInput">RegionalReplicaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountTypeInput">StorageAccountTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatest">ExcludeFromLatest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCount">RegionalReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountType">StorageAccountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeFromLatestInput`<sup>Optional</sup> <a name="ExcludeFromLatestInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatestInput"></a>

```csharp
public object ExcludeFromLatestInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionalReplicaCountInput`<sup>Optional</sup> <a name="RegionalReplicaCountInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCountInput"></a>

```csharp
public double RegionalReplicaCountInput { get; }
```

- *Type:* double

---

##### `StorageAccountTypeInput`<sup>Optional</sup> <a name="StorageAccountTypeInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountTypeInput"></a>

```csharp
public string StorageAccountTypeInput { get; }
```

- *Type:* string

---

##### `ExcludeFromLatest`<sup>Required</sup> <a name="ExcludeFromLatest" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.excludeFromLatest"></a>

```csharp
public object ExcludeFromLatest { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RegionalReplicaCount`<sup>Required</sup> <a name="RegionalReplicaCount" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.regionalReplicaCount"></a>

```csharp
public double RegionalReplicaCount { get; }
```

- *Type:* double

---

##### `StorageAccountType`<sup>Required</sup> <a name="StorageAccountType" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.storageAccountType"></a>

```csharp
public string StorageAccountType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTargetRegionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GalleryApplicationVersionTimeoutsOutputReference <a name="GalleryApplicationVersionTimeoutsOutputReference" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new GalleryApplicationVersionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.galleryApplicationVersion.GalleryApplicationVersionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



