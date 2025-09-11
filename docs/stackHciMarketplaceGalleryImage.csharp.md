# `stackHciMarketplaceGalleryImage` Submodule <a name="`stackHciMarketplaceGalleryImage` Submodule" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciMarketplaceGalleryImage <a name="StackHciMarketplaceGalleryImage" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image azurerm_stack_hci_marketplace_gallery_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciMarketplaceGalleryImage(Construct Scope, string Id, StackHciMarketplaceGalleryImageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig">StackHciMarketplaceGalleryImageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig">StackHciMarketplaceGalleryImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putIdentifier">PutIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetStoragePathId">ResetStoragePathId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentifier` <a name="PutIdentifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putIdentifier"></a>

```csharp
private void PutIdentifier(StackHciMarketplaceGalleryImageIdentifier Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts"></a>

```csharp
private void PutTimeouts(StackHciMarketplaceGalleryImageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStoragePathId` <a name="ResetStoragePathId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetStoragePathId"></a>

```csharp
private void ResetStoragePathId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackHciMarketplaceGalleryImage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StackHciMarketplaceGalleryImage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StackHciMarketplaceGalleryImage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StackHciMarketplaceGalleryImage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StackHciMarketplaceGalleryImage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StackHciMarketplaceGalleryImage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StackHciMarketplaceGalleryImage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StackHciMarketplaceGalleryImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StackHciMarketplaceGalleryImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifier">Identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference">StackHciMarketplaceGalleryImageIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference">StackHciMarketplaceGalleryImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationIdInput">CustomLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGenerationInput">HypervGenerationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifierInput">IdentifierInput</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osTypeInput">OsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathIdInput">StoragePathIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationId">CustomLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGeneration">HypervGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osType">OsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathId">StoragePathId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifier"></a>

```csharp
public StackHciMarketplaceGalleryImageIdentifierOutputReference Identifier { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference">StackHciMarketplaceGalleryImageIdentifierOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeouts"></a>

```csharp
public StackHciMarketplaceGalleryImageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference">StackHciMarketplaceGalleryImageTimeoutsOutputReference</a>

---

##### `CustomLocationIdInput`<sup>Optional</sup> <a name="CustomLocationIdInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationIdInput"></a>

```csharp
public string CustomLocationIdInput { get; }
```

- *Type:* string

---

##### `HypervGenerationInput`<sup>Optional</sup> <a name="HypervGenerationInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGenerationInput"></a>

```csharp
public string HypervGenerationInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.identifierInput"></a>

```csharp
public StackHciMarketplaceGalleryImageIdentifier IdentifierInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osTypeInput"></a>

```csharp
public string OsTypeInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StoragePathIdInput`<sup>Optional</sup> <a name="StoragePathIdInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathIdInput"></a>

```csharp
public string StoragePathIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.customLocationId"></a>

```csharp
public string CustomLocationId { get; }
```

- *Type:* string

---

##### `HypervGeneration`<sup>Required</sup> <a name="HypervGeneration" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.hypervGeneration"></a>

```csharp
public string HypervGeneration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.osType"></a>

```csharp
public string OsType { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StoragePathId`<sup>Required</sup> <a name="StoragePathId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.storagePathId"></a>

```csharp
public string StoragePathId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciMarketplaceGalleryImageConfig <a name="StackHciMarketplaceGalleryImageConfig" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciMarketplaceGalleryImageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CustomLocationId,
    string HypervGeneration,
    StackHciMarketplaceGalleryImageIdentifier Identifier,
    string Location,
    string Name,
    string OsType,
    string ResourceGroupName,
    string Version,
    string Id = null,
    string StoragePathId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    StackHciMarketplaceGalleryImageTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.customLocationId">CustomLocationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#custom_location_id StackHciMarketplaceGalleryImage#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.hypervGeneration">HypervGeneration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#hyperv_generation StackHciMarketplaceGalleryImage#hyperv_generation}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.identifier">Identifier</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a></code> | identifier block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#location StackHciMarketplaceGalleryImage#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#name StackHciMarketplaceGalleryImage#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.osType">OsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#os_type StackHciMarketplaceGalleryImage#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#resource_group_name StackHciMarketplaceGalleryImage#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#version StackHciMarketplaceGalleryImage#version}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#id StackHciMarketplaceGalleryImage#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.storagePathId">StoragePathId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#storage_path_id StackHciMarketplaceGalleryImage#storage_path_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#tags StackHciMarketplaceGalleryImage#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CustomLocationId`<sup>Required</sup> <a name="CustomLocationId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.customLocationId"></a>

```csharp
public string CustomLocationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#custom_location_id StackHciMarketplaceGalleryImage#custom_location_id}.

---

##### `HypervGeneration`<sup>Required</sup> <a name="HypervGeneration" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.hypervGeneration"></a>

```csharp
public string HypervGeneration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#hyperv_generation StackHciMarketplaceGalleryImage#hyperv_generation}.

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.identifier"></a>

```csharp
public StackHciMarketplaceGalleryImageIdentifier Identifier { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#identifier StackHciMarketplaceGalleryImage#identifier}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#location StackHciMarketplaceGalleryImage#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#name StackHciMarketplaceGalleryImage#name}.

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.osType"></a>

```csharp
public string OsType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#os_type StackHciMarketplaceGalleryImage#os_type}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#resource_group_name StackHciMarketplaceGalleryImage#resource_group_name}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#version StackHciMarketplaceGalleryImage#version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#id StackHciMarketplaceGalleryImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StoragePathId`<sup>Optional</sup> <a name="StoragePathId" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.storagePathId"></a>

```csharp
public string StoragePathId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#storage_path_id StackHciMarketplaceGalleryImage#storage_path_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#tags StackHciMarketplaceGalleryImage#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageConfig.property.timeouts"></a>

```csharp
public StackHciMarketplaceGalleryImageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts">StackHciMarketplaceGalleryImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#timeouts StackHciMarketplaceGalleryImage#timeouts}

---

### StackHciMarketplaceGalleryImageIdentifier <a name="StackHciMarketplaceGalleryImageIdentifier" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciMarketplaceGalleryImageIdentifier {
    string Offer,
    string Publisher,
    string Sku
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.offer">Offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#offer StackHciMarketplaceGalleryImage#offer}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#publisher StackHciMarketplaceGalleryImage#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#sku StackHciMarketplaceGalleryImage#sku}. |

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.offer"></a>

```csharp
public string Offer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#offer StackHciMarketplaceGalleryImage#offer}.

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#publisher StackHciMarketplaceGalleryImage#publisher}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#sku StackHciMarketplaceGalleryImage#sku}.

---

### StackHciMarketplaceGalleryImageTimeouts <a name="StackHciMarketplaceGalleryImageTimeouts" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciMarketplaceGalleryImageTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#create StackHciMarketplaceGalleryImage#create}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#delete StackHciMarketplaceGalleryImage#delete}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#read StackHciMarketplaceGalleryImage#read}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#update StackHciMarketplaceGalleryImage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#create StackHciMarketplaceGalleryImage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#delete StackHciMarketplaceGalleryImage#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#read StackHciMarketplaceGalleryImage#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/stack_hci_marketplace_gallery_image#update StackHciMarketplaceGalleryImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciMarketplaceGalleryImageIdentifierOutputReference <a name="StackHciMarketplaceGalleryImageIdentifierOutputReference" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciMarketplaceGalleryImageIdentifierOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offerInput">OfferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offer">Offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offerInput"></a>

```csharp
public string OfferInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.offer"></a>

```csharp
public string Offer { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifierOutputReference.property.internalValue"></a>

```csharp
public StackHciMarketplaceGalleryImageIdentifier InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageIdentifier">StackHciMarketplaceGalleryImageIdentifier</a>

---


### StackHciMarketplaceGalleryImageTimeoutsOutputReference <a name="StackHciMarketplaceGalleryImageTimeoutsOutputReference" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StackHciMarketplaceGalleryImageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.stackHciMarketplaceGalleryImage.StackHciMarketplaceGalleryImageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



