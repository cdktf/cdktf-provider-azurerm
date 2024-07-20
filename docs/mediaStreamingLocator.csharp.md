# `mediaStreamingLocator` Submodule <a name="`mediaStreamingLocator` Submodule" id="@cdktf/provider-azurerm.mediaStreamingLocator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaStreamingLocator <a name="MediaStreamingLocator" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator azurerm_media_streaming_locator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingLocator(Construct Scope, string Id, MediaStreamingLocatorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig">MediaStreamingLocatorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig">MediaStreamingLocatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putContentKey">PutContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetAlternativeMediaId">ResetAlternativeMediaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetContentKey">ResetContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetDefaultContentKeyPolicyName">ResetDefaultContentKeyPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetFilterNames">ResetFilterNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetStreamingLocatorId">ResetStreamingLocatorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContentKey` <a name="PutContentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putContentKey"></a>

```csharp
private void PutContentKey(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putContentKey.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putTimeouts"></a>

```csharp
private void PutTimeouts(MediaStreamingLocatorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts">MediaStreamingLocatorTimeouts</a>

---

##### `ResetAlternativeMediaId` <a name="ResetAlternativeMediaId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetAlternativeMediaId"></a>

```csharp
private void ResetAlternativeMediaId()
```

##### `ResetContentKey` <a name="ResetContentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetContentKey"></a>

```csharp
private void ResetContentKey()
```

##### `ResetDefaultContentKeyPolicyName` <a name="ResetDefaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetDefaultContentKeyPolicyName"></a>

```csharp
private void ResetDefaultContentKeyPolicyName()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetFilterNames` <a name="ResetFilterNames" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetFilterNames"></a>

```csharp
private void ResetFilterNames()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetStartTime"></a>

```csharp
private void ResetStartTime()
```

##### `ResetStreamingLocatorId` <a name="ResetStreamingLocatorId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetStreamingLocatorId"></a>

```csharp
private void ResetStreamingLocatorId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MediaStreamingLocator resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaStreamingLocator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaStreamingLocator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaStreamingLocator.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaStreamingLocator.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MediaStreamingLocator resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaStreamingLocator to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaStreamingLocator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MediaStreamingLocator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.contentKey">ContentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList">MediaStreamingLocatorContentKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference">MediaStreamingLocatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.alternativeMediaIdInput">AlternativeMediaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.assetNameInput">AssetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.contentKeyInput">ContentKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.defaultContentKeyPolicyNameInput">DefaultContentKeyPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.filterNamesInput">FilterNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.mediaServicesAccountNameInput">MediaServicesAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingLocatorIdInput">StreamingLocatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingPolicyNameInput">StreamingPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.alternativeMediaId">AlternativeMediaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.assetName">AssetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.defaultContentKeyPolicyName">DefaultContentKeyPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.filterNames">FilterNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingLocatorId">StreamingLocatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingPolicyName">StreamingPolicyName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContentKey`<sup>Required</sup> <a name="ContentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.contentKey"></a>

```csharp
public MediaStreamingLocatorContentKeyList ContentKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList">MediaStreamingLocatorContentKeyList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.timeouts"></a>

```csharp
public MediaStreamingLocatorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference">MediaStreamingLocatorTimeoutsOutputReference</a>

---

##### `AlternativeMediaIdInput`<sup>Optional</sup> <a name="AlternativeMediaIdInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.alternativeMediaIdInput"></a>

```csharp
public string AlternativeMediaIdInput { get; }
```

- *Type:* string

---

##### `AssetNameInput`<sup>Optional</sup> <a name="AssetNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.assetNameInput"></a>

```csharp
public string AssetNameInput { get; }
```

- *Type:* string

---

##### `ContentKeyInput`<sup>Optional</sup> <a name="ContentKeyInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.contentKeyInput"></a>

```csharp
public object ContentKeyInput { get; }
```

- *Type:* object

---

##### `DefaultContentKeyPolicyNameInput`<sup>Optional</sup> <a name="DefaultContentKeyPolicyNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.defaultContentKeyPolicyNameInput"></a>

```csharp
public string DefaultContentKeyPolicyNameInput { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `FilterNamesInput`<sup>Optional</sup> <a name="FilterNamesInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.filterNamesInput"></a>

```csharp
public string[] FilterNamesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MediaServicesAccountNameInput`<sup>Optional</sup> <a name="MediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.mediaServicesAccountNameInput"></a>

```csharp
public string MediaServicesAccountNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `StreamingLocatorIdInput`<sup>Optional</sup> <a name="StreamingLocatorIdInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingLocatorIdInput"></a>

```csharp
public string StreamingLocatorIdInput { get; }
```

- *Type:* string

---

##### `StreamingPolicyNameInput`<sup>Optional</sup> <a name="StreamingPolicyNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingPolicyNameInput"></a>

```csharp
public string StreamingPolicyNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AlternativeMediaId`<sup>Required</sup> <a name="AlternativeMediaId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.alternativeMediaId"></a>

```csharp
public string AlternativeMediaId { get; }
```

- *Type:* string

---

##### `AssetName`<sup>Required</sup> <a name="AssetName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.assetName"></a>

```csharp
public string AssetName { get; }
```

- *Type:* string

---

##### `DefaultContentKeyPolicyName`<sup>Required</sup> <a name="DefaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.defaultContentKeyPolicyName"></a>

```csharp
public string DefaultContentKeyPolicyName { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `FilterNames`<sup>Required</sup> <a name="FilterNames" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.filterNames"></a>

```csharp
public string[] FilterNames { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.mediaServicesAccountName"></a>

```csharp
public string MediaServicesAccountName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `StreamingLocatorId`<sup>Required</sup> <a name="StreamingLocatorId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingLocatorId"></a>

```csharp
public string StreamingLocatorId { get; }
```

- *Type:* string

---

##### `StreamingPolicyName`<sup>Required</sup> <a name="StreamingPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingPolicyName"></a>

```csharp
public string StreamingPolicyName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaStreamingLocatorConfig <a name="MediaStreamingLocatorConfig" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingLocatorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AssetName,
    string MediaServicesAccountName,
    string Name,
    string ResourceGroupName,
    string StreamingPolicyName,
    string AlternativeMediaId = null,
    object ContentKey = null,
    string DefaultContentKeyPolicyName = null,
    string EndTime = null,
    string[] FilterNames = null,
    string Id = null,
    string StartTime = null,
    string StreamingLocatorId = null,
    MediaStreamingLocatorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.assetName">AssetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#asset_name MediaStreamingLocator#asset_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#media_services_account_name MediaStreamingLocator#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#name MediaStreamingLocator#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#resource_group_name MediaStreamingLocator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.streamingPolicyName">StreamingPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#streaming_policy_name MediaStreamingLocator#streaming_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.alternativeMediaId">AlternativeMediaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#alternative_media_id MediaStreamingLocator#alternative_media_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.contentKey">ContentKey</a></code> | <code>object</code> | content_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.defaultContentKeyPolicyName">DefaultContentKeyPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#default_content_key_policy_name MediaStreamingLocator#default_content_key_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.endTime">EndTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#end_time MediaStreamingLocator#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.filterNames">FilterNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#filter_names MediaStreamingLocator#filter_names}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#id MediaStreamingLocator#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.startTime">StartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#start_time MediaStreamingLocator#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.streamingLocatorId">StreamingLocatorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#streaming_locator_id MediaStreamingLocator#streaming_locator_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts">MediaStreamingLocatorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssetName`<sup>Required</sup> <a name="AssetName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.assetName"></a>

```csharp
public string AssetName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#asset_name MediaStreamingLocator#asset_name}.

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.mediaServicesAccountName"></a>

```csharp
public string MediaServicesAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#media_services_account_name MediaStreamingLocator#media_services_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#name MediaStreamingLocator#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#resource_group_name MediaStreamingLocator#resource_group_name}.

---

##### `StreamingPolicyName`<sup>Required</sup> <a name="StreamingPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.streamingPolicyName"></a>

```csharp
public string StreamingPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#streaming_policy_name MediaStreamingLocator#streaming_policy_name}.

---

##### `AlternativeMediaId`<sup>Optional</sup> <a name="AlternativeMediaId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.alternativeMediaId"></a>

```csharp
public string AlternativeMediaId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#alternative_media_id MediaStreamingLocator#alternative_media_id}.

---

##### `ContentKey`<sup>Optional</sup> <a name="ContentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.contentKey"></a>

```csharp
public object ContentKey { get; set; }
```

- *Type:* object

content_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#content_key MediaStreamingLocator#content_key}

---

##### `DefaultContentKeyPolicyName`<sup>Optional</sup> <a name="DefaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.defaultContentKeyPolicyName"></a>

```csharp
public string DefaultContentKeyPolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#default_content_key_policy_name MediaStreamingLocator#default_content_key_policy_name}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#end_time MediaStreamingLocator#end_time}.

---

##### `FilterNames`<sup>Optional</sup> <a name="FilterNames" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.filterNames"></a>

```csharp
public string[] FilterNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#filter_names MediaStreamingLocator#filter_names}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#id MediaStreamingLocator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#start_time MediaStreamingLocator#start_time}.

---

##### `StreamingLocatorId`<sup>Optional</sup> <a name="StreamingLocatorId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.streamingLocatorId"></a>

```csharp
public string StreamingLocatorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#streaming_locator_id MediaStreamingLocator#streaming_locator_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.timeouts"></a>

```csharp
public MediaStreamingLocatorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts">MediaStreamingLocatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#timeouts MediaStreamingLocator#timeouts}

---

### MediaStreamingLocatorContentKey <a name="MediaStreamingLocatorContentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingLocatorContentKey {
    string ContentKeyId = null,
    string LabelReferenceInStreamingPolicy = null,
    string PolicyName = null,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.contentKeyId">ContentKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#content_key_id MediaStreamingLocator#content_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.labelReferenceInStreamingPolicy">LabelReferenceInStreamingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#label_reference_in_streaming_policy MediaStreamingLocator#label_reference_in_streaming_policy}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.policyName">PolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#policy_name MediaStreamingLocator#policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#type MediaStreamingLocator#type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#value MediaStreamingLocator#value}. |

---

##### `ContentKeyId`<sup>Optional</sup> <a name="ContentKeyId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.contentKeyId"></a>

```csharp
public string ContentKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#content_key_id MediaStreamingLocator#content_key_id}.

---

##### `LabelReferenceInStreamingPolicy`<sup>Optional</sup> <a name="LabelReferenceInStreamingPolicy" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.labelReferenceInStreamingPolicy"></a>

```csharp
public string LabelReferenceInStreamingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#label_reference_in_streaming_policy MediaStreamingLocator#label_reference_in_streaming_policy}.

---

##### `PolicyName`<sup>Optional</sup> <a name="PolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.policyName"></a>

```csharp
public string PolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#policy_name MediaStreamingLocator#policy_name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#type MediaStreamingLocator#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#value MediaStreamingLocator#value}.

---

### MediaStreamingLocatorTimeouts <a name="MediaStreamingLocatorTimeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingLocatorTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#create MediaStreamingLocator#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#delete MediaStreamingLocator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#read MediaStreamingLocator#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#create MediaStreamingLocator#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#delete MediaStreamingLocator#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/resources/media_streaming_locator#read MediaStreamingLocator#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaStreamingLocatorContentKeyList <a name="MediaStreamingLocatorContentKeyList" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingLocatorContentKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.get"></a>

```csharp
private MediaStreamingLocatorContentKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaStreamingLocatorContentKeyOutputReference <a name="MediaStreamingLocatorContentKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingLocatorContentKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetContentKeyId">ResetContentKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetLabelReferenceInStreamingPolicy">ResetLabelReferenceInStreamingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetPolicyName">ResetPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentKeyId` <a name="ResetContentKeyId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetContentKeyId"></a>

```csharp
private void ResetContentKeyId()
```

##### `ResetLabelReferenceInStreamingPolicy` <a name="ResetLabelReferenceInStreamingPolicy" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetLabelReferenceInStreamingPolicy"></a>

```csharp
private void ResetLabelReferenceInStreamingPolicy()
```

##### `ResetPolicyName` <a name="ResetPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetPolicyName"></a>

```csharp
private void ResetPolicyName()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.contentKeyIdInput">ContentKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.labelReferenceInStreamingPolicyInput">LabelReferenceInStreamingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.policyNameInput">PolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.contentKeyId">ContentKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.labelReferenceInStreamingPolicy">LabelReferenceInStreamingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentKeyIdInput`<sup>Optional</sup> <a name="ContentKeyIdInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.contentKeyIdInput"></a>

```csharp
public string ContentKeyIdInput { get; }
```

- *Type:* string

---

##### `LabelReferenceInStreamingPolicyInput`<sup>Optional</sup> <a name="LabelReferenceInStreamingPolicyInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.labelReferenceInStreamingPolicyInput"></a>

```csharp
public string LabelReferenceInStreamingPolicyInput { get; }
```

- *Type:* string

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.policyNameInput"></a>

```csharp
public string PolicyNameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ContentKeyId`<sup>Required</sup> <a name="ContentKeyId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.contentKeyId"></a>

```csharp
public string ContentKeyId { get; }
```

- *Type:* string

---

##### `LabelReferenceInStreamingPolicy`<sup>Required</sup> <a name="LabelReferenceInStreamingPolicy" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.labelReferenceInStreamingPolicy"></a>

```csharp
public string LabelReferenceInStreamingPolicy { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaStreamingLocatorTimeoutsOutputReference <a name="MediaStreamingLocatorTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaStreamingLocatorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



