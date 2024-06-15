# `mediaContentKeyPolicy` Submodule <a name="`mediaContentKeyPolicy` Submodule" id="@cdktf/provider-azurerm.mediaContentKeyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaContentKeyPolicy <a name="MediaContentKeyPolicy" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy azurerm_media_content_key_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicy(Construct Scope, string Id, MediaContentKeyPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig">MediaContentKeyPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig">MediaContentKeyPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putPolicyOption">PutPolicyOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicyOption` <a name="PutPolicyOption" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putPolicyOption"></a>

```csharp
private void PutPolicyOption(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putPolicyOption.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(MediaContentKeyPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MediaContentKeyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaContentKeyPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaContentKeyPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaContentKeyPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MediaContentKeyPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MediaContentKeyPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaContentKeyPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaContentKeyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MediaContentKeyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOption">PolicyOption</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList">MediaContentKeyPolicyPolicyOptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference">MediaContentKeyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountNameInput">MediaServicesAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOptionInput">PolicyOptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PolicyOption`<sup>Required</sup> <a name="PolicyOption" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOption"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionList PolicyOption { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList">MediaContentKeyPolicyPolicyOptionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeouts"></a>

```csharp
public MediaContentKeyPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference">MediaContentKeyPolicyTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MediaServicesAccountNameInput`<sup>Optional</sup> <a name="MediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountNameInput"></a>

```csharp
public string MediaServicesAccountNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyOptionInput`<sup>Optional</sup> <a name="PolicyOptionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.policyOptionInput"></a>

```csharp
public object PolicyOptionInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.mediaServicesAccountName"></a>

```csharp
public string MediaServicesAccountName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaContentKeyPolicyConfig <a name="MediaContentKeyPolicyConfig" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MediaServicesAccountName,
    string Name,
    object PolicyOption,
    string ResourceGroupName,
    string Description = null,
    string Id = null,
    MediaContentKeyPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.mediaServicesAccountName">MediaServicesAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#media_services_account_name MediaContentKeyPolicy#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.policyOption">PolicyOption</a></code> | <code>object</code> | policy_option block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#resource_group_name MediaContentKeyPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#description MediaContentKeyPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#id MediaContentKeyPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MediaServicesAccountName`<sup>Required</sup> <a name="MediaServicesAccountName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.mediaServicesAccountName"></a>

```csharp
public string MediaServicesAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#media_services_account_name MediaContentKeyPolicy#media_services_account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}.

---

##### `PolicyOption`<sup>Required</sup> <a name="PolicyOption" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.policyOption"></a>

```csharp
public object PolicyOption { get; set; }
```

- *Type:* object

policy_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#policy_option MediaContentKeyPolicy#policy_option}

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#resource_group_name MediaContentKeyPolicy#resource_group_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#description MediaContentKeyPolicy#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#id MediaContentKeyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyConfig.property.timeouts"></a>

```csharp
public MediaContentKeyPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts">MediaContentKeyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#timeouts MediaContentKeyPolicy#timeouts}

---

### MediaContentKeyPolicyPolicyOption <a name="MediaContentKeyPolicyPolicyOption" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOption {
    string Name,
    object ClearKeyConfigurationEnabled = null,
    MediaContentKeyPolicyPolicyOptionFairplayConfiguration FairplayConfiguration = null,
    object OpenRestrictionEnabled = null,
    object PlayreadyConfigurationLicense = null,
    string PlayreadyResponseCustomData = null,
    MediaContentKeyPolicyPolicyOptionTokenRestriction TokenRestriction = null,
    string WidevineConfigurationTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.clearKeyConfigurationEnabled">ClearKeyConfigurationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#clear_key_configuration_enabled MediaContentKeyPolicy#clear_key_configuration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.fairplayConfiguration">FairplayConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a></code> | fairplay_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.openRestrictionEnabled">OpenRestrictionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#open_restriction_enabled MediaContentKeyPolicy#open_restriction_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyConfigurationLicense">PlayreadyConfigurationLicense</a></code> | <code>object</code> | playready_configuration_license block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyResponseCustomData">PlayreadyResponseCustomData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#playready_response_custom_data MediaContentKeyPolicy#playready_response_custom_data}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.tokenRestriction">TokenRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a></code> | token_restriction block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.widevineConfigurationTemplate">WidevineConfigurationTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#widevine_configuration_template MediaContentKeyPolicy#widevine_configuration_template}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#name MediaContentKeyPolicy#name}.

---

##### `ClearKeyConfigurationEnabled`<sup>Optional</sup> <a name="ClearKeyConfigurationEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.clearKeyConfigurationEnabled"></a>

```csharp
public object ClearKeyConfigurationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#clear_key_configuration_enabled MediaContentKeyPolicy#clear_key_configuration_enabled}.

---

##### `FairplayConfiguration`<sup>Optional</sup> <a name="FairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.fairplayConfiguration"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionFairplayConfiguration FairplayConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

fairplay_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#fairplay_configuration MediaContentKeyPolicy#fairplay_configuration}

---

##### `OpenRestrictionEnabled`<sup>Optional</sup> <a name="OpenRestrictionEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.openRestrictionEnabled"></a>

```csharp
public object OpenRestrictionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#open_restriction_enabled MediaContentKeyPolicy#open_restriction_enabled}.

---

##### `PlayreadyConfigurationLicense`<sup>Optional</sup> <a name="PlayreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyConfigurationLicense"></a>

```csharp
public object PlayreadyConfigurationLicense { get; set; }
```

- *Type:* object

playready_configuration_license block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#playready_configuration_license MediaContentKeyPolicy#playready_configuration_license}

---

##### `PlayreadyResponseCustomData`<sup>Optional</sup> <a name="PlayreadyResponseCustomData" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.playreadyResponseCustomData"></a>

```csharp
public string PlayreadyResponseCustomData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#playready_response_custom_data MediaContentKeyPolicy#playready_response_custom_data}.

---

##### `TokenRestriction`<sup>Optional</sup> <a name="TokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.tokenRestriction"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionTokenRestriction TokenRestriction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

token_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#token_restriction MediaContentKeyPolicy#token_restriction}

---

##### `WidevineConfigurationTemplate`<sup>Optional</sup> <a name="WidevineConfigurationTemplate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOption.property.widevineConfigurationTemplate"></a>

```csharp
public string WidevineConfigurationTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#widevine_configuration_template MediaContentKeyPolicy#widevine_configuration_template}.

---

### MediaContentKeyPolicyPolicyOptionFairplayConfiguration <a name="MediaContentKeyPolicyPolicyOptionFairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionFairplayConfiguration {
    string Ask = null,
    MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration OfflineRentalConfiguration = null,
    string Pfx = null,
    string PfxPassword = null,
    string RentalAndLeaseKeyType = null,
    double RentalDurationSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.ask">Ask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#ask MediaContentKeyPolicy#ask}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.offlineRentalConfiguration">OfflineRentalConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a></code> | offline_rental_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfx">Pfx</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#pfx MediaContentKeyPolicy#pfx}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfxPassword">PfxPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#pfx_password MediaContentKeyPolicy#pfx_password}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalAndLeaseKeyType">RentalAndLeaseKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#rental_and_lease_key_type MediaContentKeyPolicy#rental_and_lease_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalDurationSeconds">RentalDurationSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#rental_duration_seconds MediaContentKeyPolicy#rental_duration_seconds}. |

---

##### `Ask`<sup>Optional</sup> <a name="Ask" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.ask"></a>

```csharp
public string Ask { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#ask MediaContentKeyPolicy#ask}.

---

##### `OfflineRentalConfiguration`<sup>Optional</sup> <a name="OfflineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.offlineRentalConfiguration"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration OfflineRentalConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

offline_rental_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#offline_rental_configuration MediaContentKeyPolicy#offline_rental_configuration}

---

##### `Pfx`<sup>Optional</sup> <a name="Pfx" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfx"></a>

```csharp
public string Pfx { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#pfx MediaContentKeyPolicy#pfx}.

---

##### `PfxPassword`<sup>Optional</sup> <a name="PfxPassword" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.pfxPassword"></a>

```csharp
public string PfxPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#pfx_password MediaContentKeyPolicy#pfx_password}.

---

##### `RentalAndLeaseKeyType`<sup>Optional</sup> <a name="RentalAndLeaseKeyType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalAndLeaseKeyType"></a>

```csharp
public string RentalAndLeaseKeyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#rental_and_lease_key_type MediaContentKeyPolicy#rental_and_lease_key_type}.

---

##### `RentalDurationSeconds`<sup>Optional</sup> <a name="RentalDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration.property.rentalDurationSeconds"></a>

```csharp
public double RentalDurationSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#rental_duration_seconds MediaContentKeyPolicy#rental_duration_seconds}.

---

### MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration <a name="MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration {
    double PlaybackDurationSeconds = null,
    double StorageDurationSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.playbackDurationSeconds">PlaybackDurationSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#playback_duration_seconds MediaContentKeyPolicy#playback_duration_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.storageDurationSeconds">StorageDurationSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#storage_duration_seconds MediaContentKeyPolicy#storage_duration_seconds}. |

---

##### `PlaybackDurationSeconds`<sup>Optional</sup> <a name="PlaybackDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.playbackDurationSeconds"></a>

```csharp
public double PlaybackDurationSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#playback_duration_seconds MediaContentKeyPolicy#playback_duration_seconds}.

---

##### `StorageDurationSeconds`<sup>Optional</sup> <a name="StorageDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration.property.storageDurationSeconds"></a>

```csharp
public double StorageDurationSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#storage_duration_seconds MediaContentKeyPolicy#storage_duration_seconds}.

---

### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense {
    object AllowTestDevices = null,
    string BeginDate = null,
    object ContentKeyLocationFromHeaderEnabled = null,
    string ContentKeyLocationFromKeyId = null,
    string ContentType = null,
    string ExpirationDate = null,
    string GracePeriod = null,
    string LicenseType = null,
    MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight PlayRight = null,
    string RelativeBeginDate = null,
    string RelativeExpirationDate = null,
    string SecurityLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.allowTestDevices">AllowTestDevices</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#allow_test_devices MediaContentKeyPolicy#allow_test_devices}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.beginDate">BeginDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#begin_date MediaContentKeyPolicy#begin_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromHeaderEnabled">ContentKeyLocationFromHeaderEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#content_key_location_from_header_enabled MediaContentKeyPolicy#content_key_location_from_header_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromKeyId">ContentKeyLocationFromKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#content_key_location_from_key_id MediaContentKeyPolicy#content_key_location_from_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#content_type MediaContentKeyPolicy#content_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#expiration_date MediaContentKeyPolicy#expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.gracePeriod">GracePeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#grace_period MediaContentKeyPolicy#grace_period}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.licenseType">LicenseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#license_type MediaContentKeyPolicy#license_type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.playRight">PlayRight</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a></code> | play_right block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeBeginDate">RelativeBeginDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#relative_begin_date MediaContentKeyPolicy#relative_begin_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeExpirationDate">RelativeExpirationDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#relative_expiration_date MediaContentKeyPolicy#relative_expiration_date}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#security_level MediaContentKeyPolicy#security_level}. |

---

##### `AllowTestDevices`<sup>Optional</sup> <a name="AllowTestDevices" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.allowTestDevices"></a>

```csharp
public object AllowTestDevices { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#allow_test_devices MediaContentKeyPolicy#allow_test_devices}.

---

##### `BeginDate`<sup>Optional</sup> <a name="BeginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.beginDate"></a>

```csharp
public string BeginDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#begin_date MediaContentKeyPolicy#begin_date}.

---

##### `ContentKeyLocationFromHeaderEnabled`<sup>Optional</sup> <a name="ContentKeyLocationFromHeaderEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromHeaderEnabled"></a>

```csharp
public object ContentKeyLocationFromHeaderEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#content_key_location_from_header_enabled MediaContentKeyPolicy#content_key_location_from_header_enabled}.

---

##### `ContentKeyLocationFromKeyId`<sup>Optional</sup> <a name="ContentKeyLocationFromKeyId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentKeyLocationFromKeyId"></a>

```csharp
public string ContentKeyLocationFromKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#content_key_location_from_key_id MediaContentKeyPolicy#content_key_location_from_key_id}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#content_type MediaContentKeyPolicy#content_type}.

---

##### `ExpirationDate`<sup>Optional</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#expiration_date MediaContentKeyPolicy#expiration_date}.

---

##### `GracePeriod`<sup>Optional</sup> <a name="GracePeriod" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.gracePeriod"></a>

```csharp
public string GracePeriod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#grace_period MediaContentKeyPolicy#grace_period}.

---

##### `LicenseType`<sup>Optional</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.licenseType"></a>

```csharp
public string LicenseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#license_type MediaContentKeyPolicy#license_type}.

---

##### `PlayRight`<sup>Optional</sup> <a name="PlayRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.playRight"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight PlayRight { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

play_right block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#play_right MediaContentKeyPolicy#play_right}

---

##### `RelativeBeginDate`<sup>Optional</sup> <a name="RelativeBeginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeBeginDate"></a>

```csharp
public string RelativeBeginDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#relative_begin_date MediaContentKeyPolicy#relative_begin_date}.

---

##### `RelativeExpirationDate`<sup>Optional</sup> <a name="RelativeExpirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.relativeExpirationDate"></a>

```csharp
public string RelativeExpirationDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#relative_expiration_date MediaContentKeyPolicy#relative_expiration_date}.

---

##### `SecurityLevel`<sup>Optional</sup> <a name="SecurityLevel" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicense.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#security_level MediaContentKeyPolicy#security_level}.

---

### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight {
    double AgcAndColorStripeRestriction = null,
    string AllowPassingVideoContentToUnknownOutput = null,
    double AnalogVideoOpl = null,
    double CompressedDigitalAudioOpl = null,
    double CompressedDigitalVideoOpl = null,
    object DigitalVideoOnlyContentRestriction = null,
    MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction ExplicitAnalogTelevisionOutputRestriction = null,
    string FirstPlayExpiration = null,
    object ImageConstraintForAnalogComponentVideoRestriction = null,
    object ImageConstraintForAnalogComputerMonitorRestriction = null,
    double ScmsRestriction = null,
    double UncompressedDigitalAudioOpl = null,
    double UncompressedDigitalVideoOpl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.agcAndColorStripeRestriction">AgcAndColorStripeRestriction</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#agc_and_color_stripe_restriction MediaContentKeyPolicy#agc_and_color_stripe_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.allowPassingVideoContentToUnknownOutput">AllowPassingVideoContentToUnknownOutput</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#allow_passing_video_content_to_unknown_output MediaContentKeyPolicy#allow_passing_video_content_to_unknown_output}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.analogVideoOpl">AnalogVideoOpl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#analog_video_opl MediaContentKeyPolicy#analog_video_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalAudioOpl">CompressedDigitalAudioOpl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#compressed_digital_audio_opl MediaContentKeyPolicy#compressed_digital_audio_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalVideoOpl">CompressedDigitalVideoOpl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#compressed_digital_video_opl MediaContentKeyPolicy#compressed_digital_video_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.digitalVideoOnlyContentRestriction">DigitalVideoOnlyContentRestriction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#digital_video_only_content_restriction MediaContentKeyPolicy#digital_video_only_content_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.explicitAnalogTelevisionOutputRestriction">ExplicitAnalogTelevisionOutputRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a></code> | explicit_analog_television_output_restriction block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.firstPlayExpiration">FirstPlayExpiration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#first_play_expiration MediaContentKeyPolicy#first_play_expiration}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComponentVideoRestriction">ImageConstraintForAnalogComponentVideoRestriction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#image_constraint_for_analog_component_video_restriction MediaContentKeyPolicy#image_constraint_for_analog_component_video_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComputerMonitorRestriction">ImageConstraintForAnalogComputerMonitorRestriction</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#image_constraint_for_analog_computer_monitor_restriction MediaContentKeyPolicy#image_constraint_for_analog_computer_monitor_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.scmsRestriction">ScmsRestriction</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#scms_restriction MediaContentKeyPolicy#scms_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalAudioOpl">UncompressedDigitalAudioOpl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#uncompressed_digital_audio_opl MediaContentKeyPolicy#uncompressed_digital_audio_opl}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalVideoOpl">UncompressedDigitalVideoOpl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#uncompressed_digital_video_opl MediaContentKeyPolicy#uncompressed_digital_video_opl}. |

---

##### `AgcAndColorStripeRestriction`<sup>Optional</sup> <a name="AgcAndColorStripeRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.agcAndColorStripeRestriction"></a>

```csharp
public double AgcAndColorStripeRestriction { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#agc_and_color_stripe_restriction MediaContentKeyPolicy#agc_and_color_stripe_restriction}.

---

##### `AllowPassingVideoContentToUnknownOutput`<sup>Optional</sup> <a name="AllowPassingVideoContentToUnknownOutput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.allowPassingVideoContentToUnknownOutput"></a>

```csharp
public string AllowPassingVideoContentToUnknownOutput { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#allow_passing_video_content_to_unknown_output MediaContentKeyPolicy#allow_passing_video_content_to_unknown_output}.

---

##### `AnalogVideoOpl`<sup>Optional</sup> <a name="AnalogVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.analogVideoOpl"></a>

```csharp
public double AnalogVideoOpl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#analog_video_opl MediaContentKeyPolicy#analog_video_opl}.

---

##### `CompressedDigitalAudioOpl`<sup>Optional</sup> <a name="CompressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalAudioOpl"></a>

```csharp
public double CompressedDigitalAudioOpl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#compressed_digital_audio_opl MediaContentKeyPolicy#compressed_digital_audio_opl}.

---

##### `CompressedDigitalVideoOpl`<sup>Optional</sup> <a name="CompressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.compressedDigitalVideoOpl"></a>

```csharp
public double CompressedDigitalVideoOpl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#compressed_digital_video_opl MediaContentKeyPolicy#compressed_digital_video_opl}.

---

##### `DigitalVideoOnlyContentRestriction`<sup>Optional</sup> <a name="DigitalVideoOnlyContentRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.digitalVideoOnlyContentRestriction"></a>

```csharp
public object DigitalVideoOnlyContentRestriction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#digital_video_only_content_restriction MediaContentKeyPolicy#digital_video_only_content_restriction}.

---

##### `ExplicitAnalogTelevisionOutputRestriction`<sup>Optional</sup> <a name="ExplicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.explicitAnalogTelevisionOutputRestriction"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction ExplicitAnalogTelevisionOutputRestriction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

explicit_analog_television_output_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#explicit_analog_television_output_restriction MediaContentKeyPolicy#explicit_analog_television_output_restriction}

---

##### `FirstPlayExpiration`<sup>Optional</sup> <a name="FirstPlayExpiration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.firstPlayExpiration"></a>

```csharp
public string FirstPlayExpiration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#first_play_expiration MediaContentKeyPolicy#first_play_expiration}.

---

##### `ImageConstraintForAnalogComponentVideoRestriction`<sup>Optional</sup> <a name="ImageConstraintForAnalogComponentVideoRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComponentVideoRestriction"></a>

```csharp
public object ImageConstraintForAnalogComponentVideoRestriction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#image_constraint_for_analog_component_video_restriction MediaContentKeyPolicy#image_constraint_for_analog_component_video_restriction}.

---

##### `ImageConstraintForAnalogComputerMonitorRestriction`<sup>Optional</sup> <a name="ImageConstraintForAnalogComputerMonitorRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.imageConstraintForAnalogComputerMonitorRestriction"></a>

```csharp
public object ImageConstraintForAnalogComputerMonitorRestriction { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#image_constraint_for_analog_computer_monitor_restriction MediaContentKeyPolicy#image_constraint_for_analog_computer_monitor_restriction}.

---

##### `ScmsRestriction`<sup>Optional</sup> <a name="ScmsRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.scmsRestriction"></a>

```csharp
public double ScmsRestriction { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#scms_restriction MediaContentKeyPolicy#scms_restriction}.

---

##### `UncompressedDigitalAudioOpl`<sup>Optional</sup> <a name="UncompressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalAudioOpl"></a>

```csharp
public double UncompressedDigitalAudioOpl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#uncompressed_digital_audio_opl MediaContentKeyPolicy#uncompressed_digital_audio_opl}.

---

##### `UncompressedDigitalVideoOpl`<sup>Optional</sup> <a name="UncompressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight.property.uncompressedDigitalVideoOpl"></a>

```csharp
public double UncompressedDigitalVideoOpl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#uncompressed_digital_video_opl MediaContentKeyPolicy#uncompressed_digital_video_opl}.

---

### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction {
    double ControlBits,
    object BestEffortEnforced = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.controlBits">ControlBits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#control_bits MediaContentKeyPolicy#control_bits}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.bestEffortEnforced">BestEffortEnforced</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#best_effort_enforced MediaContentKeyPolicy#best_effort_enforced}. |

---

##### `ControlBits`<sup>Required</sup> <a name="ControlBits" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.controlBits"></a>

```csharp
public double ControlBits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#control_bits MediaContentKeyPolicy#control_bits}.

---

##### `BestEffortEnforced`<sup>Optional</sup> <a name="BestEffortEnforced" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction.property.bestEffortEnforced"></a>

```csharp
public object BestEffortEnforced { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#best_effort_enforced MediaContentKeyPolicy#best_effort_enforced}.

---

### MediaContentKeyPolicyPolicyOptionTokenRestriction <a name="MediaContentKeyPolicyPolicyOptionTokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionTokenRestriction {
    object AlternateKey = null,
    string Audience = null,
    string Issuer = null,
    string OpenIdConnectDiscoveryDocument = null,
    string PrimaryRsaTokenKeyExponent = null,
    string PrimaryRsaTokenKeyModulus = null,
    string PrimarySymmetricTokenKey = null,
    string PrimaryX509TokenKeyRaw = null,
    object RequiredClaim = null,
    string TokenType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.alternateKey">AlternateKey</a></code> | <code>object</code> | alternate_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.audience">Audience</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#audience MediaContentKeyPolicy#audience}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#issuer MediaContentKeyPolicy#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.openIdConnectDiscoveryDocument">OpenIdConnectDiscoveryDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#open_id_connect_discovery_document MediaContentKeyPolicy#open_id_connect_discovery_document}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyExponent">PrimaryRsaTokenKeyExponent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#primary_rsa_token_key_exponent MediaContentKeyPolicy#primary_rsa_token_key_exponent}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyModulus">PrimaryRsaTokenKeyModulus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#primary_rsa_token_key_modulus MediaContentKeyPolicy#primary_rsa_token_key_modulus}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primarySymmetricTokenKey">PrimarySymmetricTokenKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#primary_symmetric_token_key MediaContentKeyPolicy#primary_symmetric_token_key}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryX509TokenKeyRaw">PrimaryX509TokenKeyRaw</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#primary_x509_token_key_raw MediaContentKeyPolicy#primary_x509_token_key_raw}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.requiredClaim">RequiredClaim</a></code> | <code>object</code> | required_claim block. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.tokenType">TokenType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#token_type MediaContentKeyPolicy#token_type}. |

---

##### `AlternateKey`<sup>Optional</sup> <a name="AlternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.alternateKey"></a>

```csharp
public object AlternateKey { get; set; }
```

- *Type:* object

alternate_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#alternate_key MediaContentKeyPolicy#alternate_key}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#audience MediaContentKeyPolicy#audience}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#issuer MediaContentKeyPolicy#issuer}.

---

##### `OpenIdConnectDiscoveryDocument`<sup>Optional</sup> <a name="OpenIdConnectDiscoveryDocument" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.openIdConnectDiscoveryDocument"></a>

```csharp
public string OpenIdConnectDiscoveryDocument { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#open_id_connect_discovery_document MediaContentKeyPolicy#open_id_connect_discovery_document}.

---

##### `PrimaryRsaTokenKeyExponent`<sup>Optional</sup> <a name="PrimaryRsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyExponent"></a>

```csharp
public string PrimaryRsaTokenKeyExponent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#primary_rsa_token_key_exponent MediaContentKeyPolicy#primary_rsa_token_key_exponent}.

---

##### `PrimaryRsaTokenKeyModulus`<sup>Optional</sup> <a name="PrimaryRsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryRsaTokenKeyModulus"></a>

```csharp
public string PrimaryRsaTokenKeyModulus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#primary_rsa_token_key_modulus MediaContentKeyPolicy#primary_rsa_token_key_modulus}.

---

##### `PrimarySymmetricTokenKey`<sup>Optional</sup> <a name="PrimarySymmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primarySymmetricTokenKey"></a>

```csharp
public string PrimarySymmetricTokenKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#primary_symmetric_token_key MediaContentKeyPolicy#primary_symmetric_token_key}.

---

##### `PrimaryX509TokenKeyRaw`<sup>Optional</sup> <a name="PrimaryX509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.primaryX509TokenKeyRaw"></a>

```csharp
public string PrimaryX509TokenKeyRaw { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#primary_x509_token_key_raw MediaContentKeyPolicy#primary_x509_token_key_raw}.

---

##### `RequiredClaim`<sup>Optional</sup> <a name="RequiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.requiredClaim"></a>

```csharp
public object RequiredClaim { get; set; }
```

- *Type:* object

required_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#required_claim MediaContentKeyPolicy#required_claim}

---

##### `TokenType`<sup>Optional</sup> <a name="TokenType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction.property.tokenType"></a>

```csharp
public string TokenType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#token_type MediaContentKeyPolicy#token_type}.

---

### MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey {
    string RsaTokenKeyExponent = null,
    string RsaTokenKeyModulus = null,
    string SymmetricTokenKey = null,
    string X509TokenKeyRaw = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyExponent">RsaTokenKeyExponent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#rsa_token_key_exponent MediaContentKeyPolicy#rsa_token_key_exponent}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyModulus">RsaTokenKeyModulus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#rsa_token_key_modulus MediaContentKeyPolicy#rsa_token_key_modulus}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.symmetricTokenKey">SymmetricTokenKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#symmetric_token_key MediaContentKeyPolicy#symmetric_token_key}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.x509TokenKeyRaw">X509TokenKeyRaw</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#x509_token_key_raw MediaContentKeyPolicy#x509_token_key_raw}. |

---

##### `RsaTokenKeyExponent`<sup>Optional</sup> <a name="RsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyExponent"></a>

```csharp
public string RsaTokenKeyExponent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#rsa_token_key_exponent MediaContentKeyPolicy#rsa_token_key_exponent}.

---

##### `RsaTokenKeyModulus`<sup>Optional</sup> <a name="RsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.rsaTokenKeyModulus"></a>

```csharp
public string RsaTokenKeyModulus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#rsa_token_key_modulus MediaContentKeyPolicy#rsa_token_key_modulus}.

---

##### `SymmetricTokenKey`<sup>Optional</sup> <a name="SymmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.symmetricTokenKey"></a>

```csharp
public string SymmetricTokenKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#symmetric_token_key MediaContentKeyPolicy#symmetric_token_key}.

---

##### `X509TokenKeyRaw`<sup>Optional</sup> <a name="X509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKey.property.x509TokenKeyRaw"></a>

```csharp
public string X509TokenKeyRaw { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#x509_token_key_raw MediaContentKeyPolicy#x509_token_key_raw}.

---

### MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim {
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#type MediaContentKeyPolicy#type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#value MediaContentKeyPolicy#value}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#type MediaContentKeyPolicy#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaim.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#value MediaContentKeyPolicy#value}.

---

### MediaContentKeyPolicyTimeouts <a name="MediaContentKeyPolicyTimeouts" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#create MediaContentKeyPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#delete MediaContentKeyPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#read MediaContentKeyPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#update MediaContentKeyPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#create MediaContentKeyPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#delete MediaContentKeyPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#read MediaContentKeyPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/media_content_key_policy#update MediaContentKeyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference <a name="MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetPlaybackDurationSeconds">ResetPlaybackDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetStorageDurationSeconds">ResetStorageDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaybackDurationSeconds` <a name="ResetPlaybackDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetPlaybackDurationSeconds"></a>

```csharp
private void ResetPlaybackDurationSeconds()
```

##### `ResetStorageDurationSeconds` <a name="ResetStorageDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.resetStorageDurationSeconds"></a>

```csharp
private void ResetStorageDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSecondsInput">PlaybackDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSecondsInput">StorageDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSeconds">PlaybackDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSeconds">StorageDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaybackDurationSecondsInput`<sup>Optional</sup> <a name="PlaybackDurationSecondsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSecondsInput"></a>

```csharp
public double PlaybackDurationSecondsInput { get; }
```

- *Type:* double

---

##### `StorageDurationSecondsInput`<sup>Optional</sup> <a name="StorageDurationSecondsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSecondsInput"></a>

```csharp
public double StorageDurationSecondsInput { get; }
```

- *Type:* double

---

##### `PlaybackDurationSeconds`<sup>Required</sup> <a name="PlaybackDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.playbackDurationSeconds"></a>

```csharp
public double PlaybackDurationSeconds { get; }
```

- *Type:* double

---

##### `StorageDurationSeconds`<sup>Required</sup> <a name="StorageDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.storageDurationSeconds"></a>

```csharp
public double StorageDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference.property.internalValue"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

---


### MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference <a name="MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.putOfflineRentalConfiguration">PutOfflineRentalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetAsk">ResetAsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetOfflineRentalConfiguration">ResetOfflineRentalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfx">ResetPfx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfxPassword">ResetPfxPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalAndLeaseKeyType">ResetRentalAndLeaseKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalDurationSeconds">ResetRentalDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOfflineRentalConfiguration` <a name="PutOfflineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.putOfflineRentalConfiguration"></a>

```csharp
private void PutOfflineRentalConfiguration(MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.putOfflineRentalConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

---

##### `ResetAsk` <a name="ResetAsk" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetAsk"></a>

```csharp
private void ResetAsk()
```

##### `ResetOfflineRentalConfiguration` <a name="ResetOfflineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetOfflineRentalConfiguration"></a>

```csharp
private void ResetOfflineRentalConfiguration()
```

##### `ResetPfx` <a name="ResetPfx" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfx"></a>

```csharp
private void ResetPfx()
```

##### `ResetPfxPassword` <a name="ResetPfxPassword" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetPfxPassword"></a>

```csharp
private void ResetPfxPassword()
```

##### `ResetRentalAndLeaseKeyType` <a name="ResetRentalAndLeaseKeyType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalAndLeaseKeyType"></a>

```csharp
private void ResetRentalAndLeaseKeyType()
```

##### `ResetRentalDurationSeconds` <a name="ResetRentalDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.resetRentalDurationSeconds"></a>

```csharp
private void ResetRentalDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfiguration">OfflineRentalConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.askInput">AskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfigurationInput">OfflineRentalConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxInput">PfxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPasswordInput">PfxPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyTypeInput">RentalAndLeaseKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSecondsInput">RentalDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.ask">Ask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfx">Pfx</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPassword">PfxPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyType">RentalAndLeaseKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSeconds">RentalDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OfflineRentalConfiguration`<sup>Required</sup> <a name="OfflineRentalConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfiguration"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference OfflineRentalConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfigurationOutputReference</a>

---

##### `AskInput`<sup>Optional</sup> <a name="AskInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.askInput"></a>

```csharp
public string AskInput { get; }
```

- *Type:* string

---

##### `OfflineRentalConfigurationInput`<sup>Optional</sup> <a name="OfflineRentalConfigurationInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.offlineRentalConfigurationInput"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration OfflineRentalConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOfflineRentalConfiguration</a>

---

##### `PfxInput`<sup>Optional</sup> <a name="PfxInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxInput"></a>

```csharp
public string PfxInput { get; }
```

- *Type:* string

---

##### `PfxPasswordInput`<sup>Optional</sup> <a name="PfxPasswordInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPasswordInput"></a>

```csharp
public string PfxPasswordInput { get; }
```

- *Type:* string

---

##### `RentalAndLeaseKeyTypeInput`<sup>Optional</sup> <a name="RentalAndLeaseKeyTypeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyTypeInput"></a>

```csharp
public string RentalAndLeaseKeyTypeInput { get; }
```

- *Type:* string

---

##### `RentalDurationSecondsInput`<sup>Optional</sup> <a name="RentalDurationSecondsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSecondsInput"></a>

```csharp
public double RentalDurationSecondsInput { get; }
```

- *Type:* double

---

##### `Ask`<sup>Required</sup> <a name="Ask" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.ask"></a>

```csharp
public string Ask { get; }
```

- *Type:* string

---

##### `Pfx`<sup>Required</sup> <a name="Pfx" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfx"></a>

```csharp
public string Pfx { get; }
```

- *Type:* string

---

##### `PfxPassword`<sup>Required</sup> <a name="PfxPassword" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.pfxPassword"></a>

```csharp
public string PfxPassword { get; }
```

- *Type:* string

---

##### `RentalAndLeaseKeyType`<sup>Required</sup> <a name="RentalAndLeaseKeyType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalAndLeaseKeyType"></a>

```csharp
public string RentalAndLeaseKeyType { get; }
```

- *Type:* string

---

##### `RentalDurationSeconds`<sup>Required</sup> <a name="RentalDurationSeconds" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.rentalDurationSeconds"></a>

```csharp
public double RentalDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference.property.internalValue"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionFairplayConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

---


### MediaContentKeyPolicyPolicyOptionList <a name="MediaContentKeyPolicyPolicyOptionList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.get"></a>

```csharp
private MediaContentKeyPolicyPolicyOptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaContentKeyPolicyPolicyOptionOutputReference <a name="MediaContentKeyPolicyPolicyOptionOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration">PutFairplayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putPlayreadyConfigurationLicense">PutPlayreadyConfigurationLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction">PutTokenRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetClearKeyConfigurationEnabled">ResetClearKeyConfigurationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetFairplayConfiguration">ResetFairplayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetOpenRestrictionEnabled">ResetOpenRestrictionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyConfigurationLicense">ResetPlayreadyConfigurationLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyResponseCustomData">ResetPlayreadyResponseCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetTokenRestriction">ResetTokenRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetWidevineConfigurationTemplate">ResetWidevineConfigurationTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFairplayConfiguration` <a name="PutFairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration"></a>

```csharp
private void PutFairplayConfiguration(MediaContentKeyPolicyPolicyOptionFairplayConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putFairplayConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

---

##### `PutPlayreadyConfigurationLicense` <a name="PutPlayreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putPlayreadyConfigurationLicense"></a>

```csharp
private void PutPlayreadyConfigurationLicense(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putPlayreadyConfigurationLicense.parameter.value"></a>

- *Type:* object

---

##### `PutTokenRestriction` <a name="PutTokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction"></a>

```csharp
private void PutTokenRestriction(MediaContentKeyPolicyPolicyOptionTokenRestriction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.putTokenRestriction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

---

##### `ResetClearKeyConfigurationEnabled` <a name="ResetClearKeyConfigurationEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetClearKeyConfigurationEnabled"></a>

```csharp
private void ResetClearKeyConfigurationEnabled()
```

##### `ResetFairplayConfiguration` <a name="ResetFairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetFairplayConfiguration"></a>

```csharp
private void ResetFairplayConfiguration()
```

##### `ResetOpenRestrictionEnabled` <a name="ResetOpenRestrictionEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetOpenRestrictionEnabled"></a>

```csharp
private void ResetOpenRestrictionEnabled()
```

##### `ResetPlayreadyConfigurationLicense` <a name="ResetPlayreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyConfigurationLicense"></a>

```csharp
private void ResetPlayreadyConfigurationLicense()
```

##### `ResetPlayreadyResponseCustomData` <a name="ResetPlayreadyResponseCustomData" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetPlayreadyResponseCustomData"></a>

```csharp
private void ResetPlayreadyResponseCustomData()
```

##### `ResetTokenRestriction` <a name="ResetTokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetTokenRestriction"></a>

```csharp
private void ResetTokenRestriction()
```

##### `ResetWidevineConfigurationTemplate` <a name="ResetWidevineConfigurationTemplate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.resetWidevineConfigurationTemplate"></a>

```csharp
private void ResetWidevineConfigurationTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfiguration">FairplayConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicense">PlayreadyConfigurationLicense</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestriction">TokenRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabledInput">ClearKeyConfigurationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfigurationInput">FairplayConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabledInput">OpenRestrictionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicenseInput">PlayreadyConfigurationLicenseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomDataInput">PlayreadyResponseCustomDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestrictionInput">TokenRestrictionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplateInput">WidevineConfigurationTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabled">ClearKeyConfigurationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabled">OpenRestrictionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomData">PlayreadyResponseCustomData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplate">WidevineConfigurationTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FairplayConfiguration`<sup>Required</sup> <a name="FairplayConfiguration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfiguration"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference FairplayConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference">MediaContentKeyPolicyPolicyOptionFairplayConfigurationOutputReference</a>

---

##### `PlayreadyConfigurationLicense`<sup>Required</sup> <a name="PlayreadyConfigurationLicense" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicense"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList PlayreadyConfigurationLicense { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList</a>

---

##### `TokenRestriction`<sup>Required</sup> <a name="TokenRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestriction"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference TokenRestriction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference</a>

---

##### `ClearKeyConfigurationEnabledInput`<sup>Optional</sup> <a name="ClearKeyConfigurationEnabledInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabledInput"></a>

```csharp
public object ClearKeyConfigurationEnabledInput { get; }
```

- *Type:* object

---

##### `FairplayConfigurationInput`<sup>Optional</sup> <a name="FairplayConfigurationInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.fairplayConfigurationInput"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionFairplayConfiguration FairplayConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionFairplayConfiguration">MediaContentKeyPolicyPolicyOptionFairplayConfiguration</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpenRestrictionEnabledInput`<sup>Optional</sup> <a name="OpenRestrictionEnabledInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabledInput"></a>

```csharp
public object OpenRestrictionEnabledInput { get; }
```

- *Type:* object

---

##### `PlayreadyConfigurationLicenseInput`<sup>Optional</sup> <a name="PlayreadyConfigurationLicenseInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyConfigurationLicenseInput"></a>

```csharp
public object PlayreadyConfigurationLicenseInput { get; }
```

- *Type:* object

---

##### `PlayreadyResponseCustomDataInput`<sup>Optional</sup> <a name="PlayreadyResponseCustomDataInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomDataInput"></a>

```csharp
public string PlayreadyResponseCustomDataInput { get; }
```

- *Type:* string

---

##### `TokenRestrictionInput`<sup>Optional</sup> <a name="TokenRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.tokenRestrictionInput"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionTokenRestriction TokenRestrictionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

---

##### `WidevineConfigurationTemplateInput`<sup>Optional</sup> <a name="WidevineConfigurationTemplateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplateInput"></a>

```csharp
public string WidevineConfigurationTemplateInput { get; }
```

- *Type:* string

---

##### `ClearKeyConfigurationEnabled`<sup>Required</sup> <a name="ClearKeyConfigurationEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.clearKeyConfigurationEnabled"></a>

```csharp
public object ClearKeyConfigurationEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpenRestrictionEnabled`<sup>Required</sup> <a name="OpenRestrictionEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.openRestrictionEnabled"></a>

```csharp
public object OpenRestrictionEnabled { get; }
```

- *Type:* object

---

##### `PlayreadyResponseCustomData`<sup>Required</sup> <a name="PlayreadyResponseCustomData" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.playreadyResponseCustomData"></a>

```csharp
public string PlayreadyResponseCustomData { get; }
```

- *Type:* string

---

##### `WidevineConfigurationTemplate`<sup>Required</sup> <a name="WidevineConfigurationTemplate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.widevineConfigurationTemplate"></a>

```csharp
public string WidevineConfigurationTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.get"></a>

```csharp
private MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight">PutPlayRight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetAllowTestDevices">ResetAllowTestDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetBeginDate">ResetBeginDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromHeaderEnabled">ResetContentKeyLocationFromHeaderEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromKeyId">ResetContentKeyLocationFromKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetExpirationDate">ResetExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetGracePeriod">ResetGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetLicenseType">ResetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetPlayRight">ResetPlayRight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeBeginDate">ResetRelativeBeginDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeExpirationDate">ResetRelativeExpirationDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetSecurityLevel">ResetSecurityLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPlayRight` <a name="PutPlayRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight"></a>

```csharp
private void PutPlayRight(MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.putPlayRight.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

---

##### `ResetAllowTestDevices` <a name="ResetAllowTestDevices" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetAllowTestDevices"></a>

```csharp
private void ResetAllowTestDevices()
```

##### `ResetBeginDate` <a name="ResetBeginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetBeginDate"></a>

```csharp
private void ResetBeginDate()
```

##### `ResetContentKeyLocationFromHeaderEnabled` <a name="ResetContentKeyLocationFromHeaderEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromHeaderEnabled"></a>

```csharp
private void ResetContentKeyLocationFromHeaderEnabled()
```

##### `ResetContentKeyLocationFromKeyId` <a name="ResetContentKeyLocationFromKeyId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentKeyLocationFromKeyId"></a>

```csharp
private void ResetContentKeyLocationFromKeyId()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetExpirationDate` <a name="ResetExpirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetExpirationDate"></a>

```csharp
private void ResetExpirationDate()
```

##### `ResetGracePeriod` <a name="ResetGracePeriod" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetGracePeriod"></a>

```csharp
private void ResetGracePeriod()
```

##### `ResetLicenseType` <a name="ResetLicenseType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetLicenseType"></a>

```csharp
private void ResetLicenseType()
```

##### `ResetPlayRight` <a name="ResetPlayRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetPlayRight"></a>

```csharp
private void ResetPlayRight()
```

##### `ResetRelativeBeginDate` <a name="ResetRelativeBeginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeBeginDate"></a>

```csharp
private void ResetRelativeBeginDate()
```

##### `ResetRelativeExpirationDate` <a name="ResetRelativeExpirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetRelativeExpirationDate"></a>

```csharp
private void ResetRelativeExpirationDate()
```

##### `ResetSecurityLevel` <a name="ResetSecurityLevel" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.resetSecurityLevel"></a>

```csharp
private void ResetSecurityLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRight">PlayRight</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevicesInput">AllowTestDevicesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDateInput">BeginDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabledInput">ContentKeyLocationFromHeaderEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyIdInput">ContentKeyLocationFromKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDateInput">ExpirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriodInput">GracePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRightInput">PlayRightInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDateInput">RelativeBeginDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDateInput">RelativeExpirationDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevelInput">SecurityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevices">AllowTestDevices</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDate">BeginDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabled">ContentKeyLocationFromHeaderEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyId">ContentKeyLocationFromKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriod">GracePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDate">RelativeBeginDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDate">RelativeExpirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlayRight`<sup>Required</sup> <a name="PlayRight" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRight"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference PlayRight { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference</a>

---

##### `AllowTestDevicesInput`<sup>Optional</sup> <a name="AllowTestDevicesInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevicesInput"></a>

```csharp
public object AllowTestDevicesInput { get; }
```

- *Type:* object

---

##### `BeginDateInput`<sup>Optional</sup> <a name="BeginDateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDateInput"></a>

```csharp
public string BeginDateInput { get; }
```

- *Type:* string

---

##### `ContentKeyLocationFromHeaderEnabledInput`<sup>Optional</sup> <a name="ContentKeyLocationFromHeaderEnabledInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabledInput"></a>

```csharp
public object ContentKeyLocationFromHeaderEnabledInput { get; }
```

- *Type:* object

---

##### `ContentKeyLocationFromKeyIdInput`<sup>Optional</sup> <a name="ContentKeyLocationFromKeyIdInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyIdInput"></a>

```csharp
public string ContentKeyLocationFromKeyIdInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `ExpirationDateInput`<sup>Optional</sup> <a name="ExpirationDateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDateInput"></a>

```csharp
public string ExpirationDateInput { get; }
```

- *Type:* string

---

##### `GracePeriodInput`<sup>Optional</sup> <a name="GracePeriodInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriodInput"></a>

```csharp
public string GracePeriodInput { get; }
```

- *Type:* string

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseTypeInput"></a>

```csharp
public string LicenseTypeInput { get; }
```

- *Type:* string

---

##### `PlayRightInput`<sup>Optional</sup> <a name="PlayRightInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.playRightInput"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight PlayRightInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

---

##### `RelativeBeginDateInput`<sup>Optional</sup> <a name="RelativeBeginDateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDateInput"></a>

```csharp
public string RelativeBeginDateInput { get; }
```

- *Type:* string

---

##### `RelativeExpirationDateInput`<sup>Optional</sup> <a name="RelativeExpirationDateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDateInput"></a>

```csharp
public string RelativeExpirationDateInput { get; }
```

- *Type:* string

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevelInput"></a>

```csharp
public string SecurityLevelInput { get; }
```

- *Type:* string

---

##### `AllowTestDevices`<sup>Required</sup> <a name="AllowTestDevices" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.allowTestDevices"></a>

```csharp
public object AllowTestDevices { get; }
```

- *Type:* object

---

##### `BeginDate`<sup>Required</sup> <a name="BeginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.beginDate"></a>

```csharp
public string BeginDate { get; }
```

- *Type:* string

---

##### `ContentKeyLocationFromHeaderEnabled`<sup>Required</sup> <a name="ContentKeyLocationFromHeaderEnabled" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromHeaderEnabled"></a>

```csharp
public object ContentKeyLocationFromHeaderEnabled { get; }
```

- *Type:* object

---

##### `ContentKeyLocationFromKeyId`<sup>Required</sup> <a name="ContentKeyLocationFromKeyId" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentKeyLocationFromKeyId"></a>

```csharp
public string ContentKeyLocationFromKeyId { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; }
```

- *Type:* string

---

##### `GracePeriod`<sup>Required</sup> <a name="GracePeriod" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.gracePeriod"></a>

```csharp
public string GracePeriod { get; }
```

- *Type:* string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `RelativeBeginDate`<sup>Required</sup> <a name="RelativeBeginDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeBeginDate"></a>

```csharp
public string RelativeBeginDate { get; }
```

- *Type:* string

---

##### `RelativeExpirationDate`<sup>Required</sup> <a name="RelativeExpirationDate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.relativeExpirationDate"></a>

```csharp
public string RelativeExpirationDate { get; }
```

- *Type:* string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicenseOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resetBestEffortEnforced">ResetBestEffortEnforced</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBestEffortEnforced` <a name="ResetBestEffortEnforced" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.resetBestEffortEnforced"></a>

```csharp
private void ResetBestEffortEnforced()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforcedInput">BestEffortEnforcedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBitsInput">ControlBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforced">BestEffortEnforced</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBits">ControlBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BestEffortEnforcedInput`<sup>Optional</sup> <a name="BestEffortEnforcedInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforcedInput"></a>

```csharp
public object BestEffortEnforcedInput { get; }
```

- *Type:* object

---

##### `ControlBitsInput`<sup>Optional</sup> <a name="ControlBitsInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBitsInput"></a>

```csharp
public double ControlBitsInput { get; }
```

- *Type:* double

---

##### `BestEffortEnforced`<sup>Required</sup> <a name="BestEffortEnforced" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.bestEffortEnforced"></a>

```csharp
public object BestEffortEnforced { get; }
```

- *Type:* object

---

##### `ControlBits`<sup>Required</sup> <a name="ControlBits" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.controlBits"></a>

```csharp
public double ControlBits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference.property.internalValue"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

---


### MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference <a name="MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.putExplicitAnalogTelevisionOutputRestriction">PutExplicitAnalogTelevisionOutputRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAgcAndColorStripeRestriction">ResetAgcAndColorStripeRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAllowPassingVideoContentToUnknownOutput">ResetAllowPassingVideoContentToUnknownOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAnalogVideoOpl">ResetAnalogVideoOpl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalAudioOpl">ResetCompressedDigitalAudioOpl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalVideoOpl">ResetCompressedDigitalVideoOpl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetDigitalVideoOnlyContentRestriction">ResetDigitalVideoOnlyContentRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetExplicitAnalogTelevisionOutputRestriction">ResetExplicitAnalogTelevisionOutputRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetFirstPlayExpiration">ResetFirstPlayExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComponentVideoRestriction">ResetImageConstraintForAnalogComponentVideoRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComputerMonitorRestriction">ResetImageConstraintForAnalogComputerMonitorRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetScmsRestriction">ResetScmsRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalAudioOpl">ResetUncompressedDigitalAudioOpl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalVideoOpl">ResetUncompressedDigitalVideoOpl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExplicitAnalogTelevisionOutputRestriction` <a name="PutExplicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.putExplicitAnalogTelevisionOutputRestriction"></a>

```csharp
private void PutExplicitAnalogTelevisionOutputRestriction(MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.putExplicitAnalogTelevisionOutputRestriction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

---

##### `ResetAgcAndColorStripeRestriction` <a name="ResetAgcAndColorStripeRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAgcAndColorStripeRestriction"></a>

```csharp
private void ResetAgcAndColorStripeRestriction()
```

##### `ResetAllowPassingVideoContentToUnknownOutput` <a name="ResetAllowPassingVideoContentToUnknownOutput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAllowPassingVideoContentToUnknownOutput"></a>

```csharp
private void ResetAllowPassingVideoContentToUnknownOutput()
```

##### `ResetAnalogVideoOpl` <a name="ResetAnalogVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetAnalogVideoOpl"></a>

```csharp
private void ResetAnalogVideoOpl()
```

##### `ResetCompressedDigitalAudioOpl` <a name="ResetCompressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalAudioOpl"></a>

```csharp
private void ResetCompressedDigitalAudioOpl()
```

##### `ResetCompressedDigitalVideoOpl` <a name="ResetCompressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetCompressedDigitalVideoOpl"></a>

```csharp
private void ResetCompressedDigitalVideoOpl()
```

##### `ResetDigitalVideoOnlyContentRestriction` <a name="ResetDigitalVideoOnlyContentRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetDigitalVideoOnlyContentRestriction"></a>

```csharp
private void ResetDigitalVideoOnlyContentRestriction()
```

##### `ResetExplicitAnalogTelevisionOutputRestriction` <a name="ResetExplicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetExplicitAnalogTelevisionOutputRestriction"></a>

```csharp
private void ResetExplicitAnalogTelevisionOutputRestriction()
```

##### `ResetFirstPlayExpiration` <a name="ResetFirstPlayExpiration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetFirstPlayExpiration"></a>

```csharp
private void ResetFirstPlayExpiration()
```

##### `ResetImageConstraintForAnalogComponentVideoRestriction` <a name="ResetImageConstraintForAnalogComponentVideoRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComponentVideoRestriction"></a>

```csharp
private void ResetImageConstraintForAnalogComponentVideoRestriction()
```

##### `ResetImageConstraintForAnalogComputerMonitorRestriction` <a name="ResetImageConstraintForAnalogComputerMonitorRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetImageConstraintForAnalogComputerMonitorRestriction"></a>

```csharp
private void ResetImageConstraintForAnalogComputerMonitorRestriction()
```

##### `ResetScmsRestriction` <a name="ResetScmsRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetScmsRestriction"></a>

```csharp
private void ResetScmsRestriction()
```

##### `ResetUncompressedDigitalAudioOpl` <a name="ResetUncompressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalAudioOpl"></a>

```csharp
private void ResetUncompressedDigitalAudioOpl()
```

##### `ResetUncompressedDigitalVideoOpl` <a name="ResetUncompressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.resetUncompressedDigitalVideoOpl"></a>

```csharp
private void ResetUncompressedDigitalVideoOpl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestriction">ExplicitAnalogTelevisionOutputRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestrictionInput">AgcAndColorStripeRestrictionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutputInput">AllowPassingVideoContentToUnknownOutputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOplInput">AnalogVideoOplInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOplInput">CompressedDigitalAudioOplInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOplInput">CompressedDigitalVideoOplInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestrictionInput">DigitalVideoOnlyContentRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestrictionInput">ExplicitAnalogTelevisionOutputRestrictionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpirationInput">FirstPlayExpirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestrictionInput">ImageConstraintForAnalogComponentVideoRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestrictionInput">ImageConstraintForAnalogComputerMonitorRestrictionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestrictionInput">ScmsRestrictionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOplInput">UncompressedDigitalAudioOplInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOplInput">UncompressedDigitalVideoOplInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestriction">AgcAndColorStripeRestriction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutput">AllowPassingVideoContentToUnknownOutput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOpl">AnalogVideoOpl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOpl">CompressedDigitalAudioOpl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOpl">CompressedDigitalVideoOpl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestriction">DigitalVideoOnlyContentRestriction</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpiration">FirstPlayExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestriction">ImageConstraintForAnalogComponentVideoRestriction</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestriction">ImageConstraintForAnalogComputerMonitorRestriction</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestriction">ScmsRestriction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOpl">UncompressedDigitalAudioOpl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOpl">UncompressedDigitalVideoOpl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExplicitAnalogTelevisionOutputRestriction`<sup>Required</sup> <a name="ExplicitAnalogTelevisionOutputRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestriction"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference ExplicitAnalogTelevisionOutputRestriction { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestrictionOutputReference</a>

---

##### `AgcAndColorStripeRestrictionInput`<sup>Optional</sup> <a name="AgcAndColorStripeRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestrictionInput"></a>

```csharp
public double AgcAndColorStripeRestrictionInput { get; }
```

- *Type:* double

---

##### `AllowPassingVideoContentToUnknownOutputInput`<sup>Optional</sup> <a name="AllowPassingVideoContentToUnknownOutputInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutputInput"></a>

```csharp
public string AllowPassingVideoContentToUnknownOutputInput { get; }
```

- *Type:* string

---

##### `AnalogVideoOplInput`<sup>Optional</sup> <a name="AnalogVideoOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOplInput"></a>

```csharp
public double AnalogVideoOplInput { get; }
```

- *Type:* double

---

##### `CompressedDigitalAudioOplInput`<sup>Optional</sup> <a name="CompressedDigitalAudioOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOplInput"></a>

```csharp
public double CompressedDigitalAudioOplInput { get; }
```

- *Type:* double

---

##### `CompressedDigitalVideoOplInput`<sup>Optional</sup> <a name="CompressedDigitalVideoOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOplInput"></a>

```csharp
public double CompressedDigitalVideoOplInput { get; }
```

- *Type:* double

---

##### `DigitalVideoOnlyContentRestrictionInput`<sup>Optional</sup> <a name="DigitalVideoOnlyContentRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestrictionInput"></a>

```csharp
public object DigitalVideoOnlyContentRestrictionInput { get; }
```

- *Type:* object

---

##### `ExplicitAnalogTelevisionOutputRestrictionInput`<sup>Optional</sup> <a name="ExplicitAnalogTelevisionOutputRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.explicitAnalogTelevisionOutputRestrictionInput"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction ExplicitAnalogTelevisionOutputRestrictionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightExplicitAnalogTelevisionOutputRestriction</a>

---

##### `FirstPlayExpirationInput`<sup>Optional</sup> <a name="FirstPlayExpirationInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpirationInput"></a>

```csharp
public string FirstPlayExpirationInput { get; }
```

- *Type:* string

---

##### `ImageConstraintForAnalogComponentVideoRestrictionInput`<sup>Optional</sup> <a name="ImageConstraintForAnalogComponentVideoRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestrictionInput"></a>

```csharp
public object ImageConstraintForAnalogComponentVideoRestrictionInput { get; }
```

- *Type:* object

---

##### `ImageConstraintForAnalogComputerMonitorRestrictionInput`<sup>Optional</sup> <a name="ImageConstraintForAnalogComputerMonitorRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestrictionInput"></a>

```csharp
public object ImageConstraintForAnalogComputerMonitorRestrictionInput { get; }
```

- *Type:* object

---

##### `ScmsRestrictionInput`<sup>Optional</sup> <a name="ScmsRestrictionInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestrictionInput"></a>

```csharp
public double ScmsRestrictionInput { get; }
```

- *Type:* double

---

##### `UncompressedDigitalAudioOplInput`<sup>Optional</sup> <a name="UncompressedDigitalAudioOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOplInput"></a>

```csharp
public double UncompressedDigitalAudioOplInput { get; }
```

- *Type:* double

---

##### `UncompressedDigitalVideoOplInput`<sup>Optional</sup> <a name="UncompressedDigitalVideoOplInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOplInput"></a>

```csharp
public double UncompressedDigitalVideoOplInput { get; }
```

- *Type:* double

---

##### `AgcAndColorStripeRestriction`<sup>Required</sup> <a name="AgcAndColorStripeRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.agcAndColorStripeRestriction"></a>

```csharp
public double AgcAndColorStripeRestriction { get; }
```

- *Type:* double

---

##### `AllowPassingVideoContentToUnknownOutput`<sup>Required</sup> <a name="AllowPassingVideoContentToUnknownOutput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.allowPassingVideoContentToUnknownOutput"></a>

```csharp
public string AllowPassingVideoContentToUnknownOutput { get; }
```

- *Type:* string

---

##### `AnalogVideoOpl`<sup>Required</sup> <a name="AnalogVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.analogVideoOpl"></a>

```csharp
public double AnalogVideoOpl { get; }
```

- *Type:* double

---

##### `CompressedDigitalAudioOpl`<sup>Required</sup> <a name="CompressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalAudioOpl"></a>

```csharp
public double CompressedDigitalAudioOpl { get; }
```

- *Type:* double

---

##### `CompressedDigitalVideoOpl`<sup>Required</sup> <a name="CompressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.compressedDigitalVideoOpl"></a>

```csharp
public double CompressedDigitalVideoOpl { get; }
```

- *Type:* double

---

##### `DigitalVideoOnlyContentRestriction`<sup>Required</sup> <a name="DigitalVideoOnlyContentRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.digitalVideoOnlyContentRestriction"></a>

```csharp
public object DigitalVideoOnlyContentRestriction { get; }
```

- *Type:* object

---

##### `FirstPlayExpiration`<sup>Required</sup> <a name="FirstPlayExpiration" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.firstPlayExpiration"></a>

```csharp
public string FirstPlayExpiration { get; }
```

- *Type:* string

---

##### `ImageConstraintForAnalogComponentVideoRestriction`<sup>Required</sup> <a name="ImageConstraintForAnalogComponentVideoRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComponentVideoRestriction"></a>

```csharp
public object ImageConstraintForAnalogComponentVideoRestriction { get; }
```

- *Type:* object

---

##### `ImageConstraintForAnalogComputerMonitorRestriction`<sup>Required</sup> <a name="ImageConstraintForAnalogComputerMonitorRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.imageConstraintForAnalogComputerMonitorRestriction"></a>

```csharp
public object ImageConstraintForAnalogComputerMonitorRestriction { get; }
```

- *Type:* object

---

##### `ScmsRestriction`<sup>Required</sup> <a name="ScmsRestriction" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.scmsRestriction"></a>

```csharp
public double ScmsRestriction { get; }
```

- *Type:* double

---

##### `UncompressedDigitalAudioOpl`<sup>Required</sup> <a name="UncompressedDigitalAudioOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalAudioOpl"></a>

```csharp
public double UncompressedDigitalAudioOpl { get; }
```

- *Type:* double

---

##### `UncompressedDigitalVideoOpl`<sup>Required</sup> <a name="UncompressedDigitalVideoOpl" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.uncompressedDigitalVideoOpl"></a>

```csharp
public double UncompressedDigitalVideoOpl { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRightOutputReference.property.internalValue"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight">MediaContentKeyPolicyPolicyOptionPlayreadyConfigurationLicensePlayRight</a>

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.get"></a>

```csharp
private MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyExponent">ResetRsaTokenKeyExponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyModulus">ResetRsaTokenKeyModulus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetSymmetricTokenKey">ResetSymmetricTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetX509TokenKeyRaw">ResetX509TokenKeyRaw</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRsaTokenKeyExponent` <a name="ResetRsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyExponent"></a>

```csharp
private void ResetRsaTokenKeyExponent()
```

##### `ResetRsaTokenKeyModulus` <a name="ResetRsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetRsaTokenKeyModulus"></a>

```csharp
private void ResetRsaTokenKeyModulus()
```

##### `ResetSymmetricTokenKey` <a name="ResetSymmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetSymmetricTokenKey"></a>

```csharp
private void ResetSymmetricTokenKey()
```

##### `ResetX509TokenKeyRaw` <a name="ResetX509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.resetX509TokenKeyRaw"></a>

```csharp
private void ResetX509TokenKeyRaw()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponentInput">RsaTokenKeyExponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulusInput">RsaTokenKeyModulusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKeyInput">SymmetricTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRawInput">X509TokenKeyRawInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponent">RsaTokenKeyExponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulus">RsaTokenKeyModulus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKey">SymmetricTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRaw">X509TokenKeyRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RsaTokenKeyExponentInput`<sup>Optional</sup> <a name="RsaTokenKeyExponentInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponentInput"></a>

```csharp
public string RsaTokenKeyExponentInput { get; }
```

- *Type:* string

---

##### `RsaTokenKeyModulusInput`<sup>Optional</sup> <a name="RsaTokenKeyModulusInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulusInput"></a>

```csharp
public string RsaTokenKeyModulusInput { get; }
```

- *Type:* string

---

##### `SymmetricTokenKeyInput`<sup>Optional</sup> <a name="SymmetricTokenKeyInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKeyInput"></a>

```csharp
public string SymmetricTokenKeyInput { get; }
```

- *Type:* string

---

##### `X509TokenKeyRawInput`<sup>Optional</sup> <a name="X509TokenKeyRawInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRawInput"></a>

```csharp
public string X509TokenKeyRawInput { get; }
```

- *Type:* string

---

##### `RsaTokenKeyExponent`<sup>Required</sup> <a name="RsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyExponent"></a>

```csharp
public string RsaTokenKeyExponent { get; }
```

- *Type:* string

---

##### `RsaTokenKeyModulus`<sup>Required</sup> <a name="RsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.rsaTokenKeyModulus"></a>

```csharp
public string RsaTokenKeyModulus { get; }
```

- *Type:* string

---

##### `SymmetricTokenKey`<sup>Required</sup> <a name="SymmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.symmetricTokenKey"></a>

```csharp
public string SymmetricTokenKey { get; }
```

- *Type:* string

---

##### `X509TokenKeyRaw`<sup>Required</sup> <a name="X509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.x509TokenKeyRaw"></a>

```csharp
public string X509TokenKeyRaw { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putAlternateKey">PutAlternateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putRequiredClaim">PutRequiredClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAlternateKey">ResetAlternateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetOpenIdConnectDiscoveryDocument">ResetOpenIdConnectDiscoveryDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyExponent">ResetPrimaryRsaTokenKeyExponent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyModulus">ResetPrimaryRsaTokenKeyModulus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimarySymmetricTokenKey">ResetPrimarySymmetricTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryX509TokenKeyRaw">ResetPrimaryX509TokenKeyRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetRequiredClaim">ResetRequiredClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetTokenType">ResetTokenType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlternateKey` <a name="PutAlternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putAlternateKey"></a>

```csharp
private void PutAlternateKey(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putAlternateKey.parameter.value"></a>

- *Type:* object

---

##### `PutRequiredClaim` <a name="PutRequiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putRequiredClaim"></a>

```csharp
private void PutRequiredClaim(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.putRequiredClaim.parameter.value"></a>

- *Type:* object

---

##### `ResetAlternateKey` <a name="ResetAlternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAlternateKey"></a>

```csharp
private void ResetAlternateKey()
```

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetAudience"></a>

```csharp
private void ResetAudience()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetOpenIdConnectDiscoveryDocument` <a name="ResetOpenIdConnectDiscoveryDocument" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetOpenIdConnectDiscoveryDocument"></a>

```csharp
private void ResetOpenIdConnectDiscoveryDocument()
```

##### `ResetPrimaryRsaTokenKeyExponent` <a name="ResetPrimaryRsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyExponent"></a>

```csharp
private void ResetPrimaryRsaTokenKeyExponent()
```

##### `ResetPrimaryRsaTokenKeyModulus` <a name="ResetPrimaryRsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryRsaTokenKeyModulus"></a>

```csharp
private void ResetPrimaryRsaTokenKeyModulus()
```

##### `ResetPrimarySymmetricTokenKey` <a name="ResetPrimarySymmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimarySymmetricTokenKey"></a>

```csharp
private void ResetPrimarySymmetricTokenKey()
```

##### `ResetPrimaryX509TokenKeyRaw` <a name="ResetPrimaryX509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetPrimaryX509TokenKeyRaw"></a>

```csharp
private void ResetPrimaryX509TokenKeyRaw()
```

##### `ResetRequiredClaim` <a name="ResetRequiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetRequiredClaim"></a>

```csharp
private void ResetRequiredClaim()
```

##### `ResetTokenType` <a name="ResetTokenType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.resetTokenType"></a>

```csharp
private void ResetTokenType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKey">AlternateKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaim">RequiredClaim</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKeyInput">AlternateKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocumentInput">OpenIdConnectDiscoveryDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponentInput">PrimaryRsaTokenKeyExponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulusInput">PrimaryRsaTokenKeyModulusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKeyInput">PrimarySymmetricTokenKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRawInput">PrimaryX509TokenKeyRawInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaimInput">RequiredClaimInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenTypeInput">TokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocument">OpenIdConnectDiscoveryDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponent">PrimaryRsaTokenKeyExponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulus">PrimaryRsaTokenKeyModulus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKey">PrimarySymmetricTokenKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRaw">PrimaryX509TokenKeyRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenType">TokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlternateKey`<sup>Required</sup> <a name="AlternateKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKey"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList AlternateKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList">MediaContentKeyPolicyPolicyOptionTokenRestrictionAlternateKeyList</a>

---

##### `RequiredClaim`<sup>Required</sup> <a name="RequiredClaim" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaim"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList RequiredClaim { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList">MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList</a>

---

##### `AlternateKeyInput`<sup>Optional</sup> <a name="AlternateKeyInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.alternateKeyInput"></a>

```csharp
public object AlternateKeyInput { get; }
```

- *Type:* object

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `OpenIdConnectDiscoveryDocumentInput`<sup>Optional</sup> <a name="OpenIdConnectDiscoveryDocumentInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocumentInput"></a>

```csharp
public string OpenIdConnectDiscoveryDocumentInput { get; }
```

- *Type:* string

---

##### `PrimaryRsaTokenKeyExponentInput`<sup>Optional</sup> <a name="PrimaryRsaTokenKeyExponentInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponentInput"></a>

```csharp
public string PrimaryRsaTokenKeyExponentInput { get; }
```

- *Type:* string

---

##### `PrimaryRsaTokenKeyModulusInput`<sup>Optional</sup> <a name="PrimaryRsaTokenKeyModulusInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulusInput"></a>

```csharp
public string PrimaryRsaTokenKeyModulusInput { get; }
```

- *Type:* string

---

##### `PrimarySymmetricTokenKeyInput`<sup>Optional</sup> <a name="PrimarySymmetricTokenKeyInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKeyInput"></a>

```csharp
public string PrimarySymmetricTokenKeyInput { get; }
```

- *Type:* string

---

##### `PrimaryX509TokenKeyRawInput`<sup>Optional</sup> <a name="PrimaryX509TokenKeyRawInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRawInput"></a>

```csharp
public string PrimaryX509TokenKeyRawInput { get; }
```

- *Type:* string

---

##### `RequiredClaimInput`<sup>Optional</sup> <a name="RequiredClaimInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.requiredClaimInput"></a>

```csharp
public object RequiredClaimInput { get; }
```

- *Type:* object

---

##### `TokenTypeInput`<sup>Optional</sup> <a name="TokenTypeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenTypeInput"></a>

```csharp
public string TokenTypeInput { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `OpenIdConnectDiscoveryDocument`<sup>Required</sup> <a name="OpenIdConnectDiscoveryDocument" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.openIdConnectDiscoveryDocument"></a>

```csharp
public string OpenIdConnectDiscoveryDocument { get; }
```

- *Type:* string

---

##### `PrimaryRsaTokenKeyExponent`<sup>Required</sup> <a name="PrimaryRsaTokenKeyExponent" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyExponent"></a>

```csharp
public string PrimaryRsaTokenKeyExponent { get; }
```

- *Type:* string

---

##### `PrimaryRsaTokenKeyModulus`<sup>Required</sup> <a name="PrimaryRsaTokenKeyModulus" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryRsaTokenKeyModulus"></a>

```csharp
public string PrimaryRsaTokenKeyModulus { get; }
```

- *Type:* string

---

##### `PrimarySymmetricTokenKey`<sup>Required</sup> <a name="PrimarySymmetricTokenKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primarySymmetricTokenKey"></a>

```csharp
public string PrimarySymmetricTokenKey { get; }
```

- *Type:* string

---

##### `PrimaryX509TokenKeyRaw`<sup>Required</sup> <a name="PrimaryX509TokenKeyRaw" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.primaryX509TokenKeyRaw"></a>

```csharp
public string PrimaryX509TokenKeyRaw { get; }
```

- *Type:* string

---

##### `TokenType`<sup>Required</sup> <a name="TokenType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.tokenType"></a>

```csharp
public string TokenType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionOutputReference.property.internalValue"></a>

```csharp
public MediaContentKeyPolicyPolicyOptionTokenRestriction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestriction">MediaContentKeyPolicyPolicyOptionTokenRestriction</a>

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.get"></a>

```csharp
private MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference <a name="MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyPolicyOptionTokenRestrictionRequiredClaimOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MediaContentKeyPolicyTimeoutsOutputReference <a name="MediaContentKeyPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MediaContentKeyPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mediaContentKeyPolicy.MediaContentKeyPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



