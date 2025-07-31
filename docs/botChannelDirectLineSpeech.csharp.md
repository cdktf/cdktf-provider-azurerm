# `botChannelDirectLineSpeech` Submodule <a name="`botChannelDirectLineSpeech` Submodule" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotChannelDirectLineSpeech <a name="BotChannelDirectLineSpeech" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech azurerm_bot_channel_direct_line_speech}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BotChannelDirectLineSpeech(Construct Scope, string Id, BotChannelDirectLineSpeechConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig">BotChannelDirectLineSpeechConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig">BotChannelDirectLineSpeechConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCognitiveAccountId">ResetCognitiveAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomSpeechModelId">ResetCustomSpeechModelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomVoiceDeploymentId">ResetCustomVoiceDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts"></a>

```csharp
private void PutTimeouts(BotChannelDirectLineSpeechTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>

---

##### `ResetCognitiveAccountId` <a name="ResetCognitiveAccountId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCognitiveAccountId"></a>

```csharp
private void ResetCognitiveAccountId()
```

##### `ResetCustomSpeechModelId` <a name="ResetCustomSpeechModelId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomSpeechModelId"></a>

```csharp
private void ResetCustomSpeechModelId()
```

##### `ResetCustomVoiceDeploymentId` <a name="ResetCustomVoiceDeploymentId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetCustomVoiceDeploymentId"></a>

```csharp
private void ResetCustomVoiceDeploymentId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BotChannelDirectLineSpeech resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BotChannelDirectLineSpeech.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BotChannelDirectLineSpeech.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BotChannelDirectLineSpeech.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

BotChannelDirectLineSpeech.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BotChannelDirectLineSpeech resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BotChannelDirectLineSpeech to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BotChannelDirectLineSpeech that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BotChannelDirectLineSpeech to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference">BotChannelDirectLineSpeechTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botNameInput">BotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountIdInput">CognitiveAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKeyInput">CognitiveServiceAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocationInput">CognitiveServiceLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelIdInput">CustomSpeechModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentIdInput">CustomVoiceDeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botName">BotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountId">CognitiveAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKey">CognitiveServiceAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocation">CognitiveServiceLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelId">CustomSpeechModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentId">CustomVoiceDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeouts"></a>

```csharp
public BotChannelDirectLineSpeechTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference">BotChannelDirectLineSpeechTimeoutsOutputReference</a>

---

##### `BotNameInput`<sup>Optional</sup> <a name="BotNameInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botNameInput"></a>

```csharp
public string BotNameInput { get; }
```

- *Type:* string

---

##### `CognitiveAccountIdInput`<sup>Optional</sup> <a name="CognitiveAccountIdInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountIdInput"></a>

```csharp
public string CognitiveAccountIdInput { get; }
```

- *Type:* string

---

##### `CognitiveServiceAccessKeyInput`<sup>Optional</sup> <a name="CognitiveServiceAccessKeyInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKeyInput"></a>

```csharp
public string CognitiveServiceAccessKeyInput { get; }
```

- *Type:* string

---

##### `CognitiveServiceLocationInput`<sup>Optional</sup> <a name="CognitiveServiceLocationInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocationInput"></a>

```csharp
public string CognitiveServiceLocationInput { get; }
```

- *Type:* string

---

##### `CustomSpeechModelIdInput`<sup>Optional</sup> <a name="CustomSpeechModelIdInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelIdInput"></a>

```csharp
public string CustomSpeechModelIdInput { get; }
```

- *Type:* string

---

##### `CustomVoiceDeploymentIdInput`<sup>Optional</sup> <a name="CustomVoiceDeploymentIdInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentIdInput"></a>

```csharp
public string CustomVoiceDeploymentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BotName`<sup>Required</sup> <a name="BotName" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.botName"></a>

```csharp
public string BotName { get; }
```

- *Type:* string

---

##### `CognitiveAccountId`<sup>Required</sup> <a name="CognitiveAccountId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveAccountId"></a>

```csharp
public string CognitiveAccountId { get; }
```

- *Type:* string

---

##### `CognitiveServiceAccessKey`<sup>Required</sup> <a name="CognitiveServiceAccessKey" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceAccessKey"></a>

```csharp
public string CognitiveServiceAccessKey { get; }
```

- *Type:* string

---

##### `CognitiveServiceLocation`<sup>Required</sup> <a name="CognitiveServiceLocation" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.cognitiveServiceLocation"></a>

```csharp
public string CognitiveServiceLocation { get; }
```

- *Type:* string

---

##### `CustomSpeechModelId`<sup>Required</sup> <a name="CustomSpeechModelId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customSpeechModelId"></a>

```csharp
public string CustomSpeechModelId { get; }
```

- *Type:* string

---

##### `CustomVoiceDeploymentId`<sup>Required</sup> <a name="CustomVoiceDeploymentId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.customVoiceDeploymentId"></a>

```csharp
public string CustomVoiceDeploymentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeech.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BotChannelDirectLineSpeechConfig <a name="BotChannelDirectLineSpeechConfig" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BotChannelDirectLineSpeechConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BotName,
    string CognitiveServiceAccessKey,
    string CognitiveServiceLocation,
    string Location,
    string ResourceGroupName,
    string CognitiveAccountId = null,
    string CustomSpeechModelId = null,
    string CustomVoiceDeploymentId = null,
    string Id = null,
    BotChannelDirectLineSpeechTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.botName">BotName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#bot_name BotChannelDirectLineSpeech#bot_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceAccessKey">CognitiveServiceAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_access_key BotChannelDirectLineSpeech#cognitive_service_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceLocation">CognitiveServiceLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_location BotChannelDirectLineSpeech#cognitive_service_location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#location BotChannelDirectLineSpeech#location}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#resource_group_name BotChannelDirectLineSpeech#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveAccountId">CognitiveAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#cognitive_account_id BotChannelDirectLineSpeech#cognitive_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customSpeechModelId">CustomSpeechModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#custom_speech_model_id BotChannelDirectLineSpeech#custom_speech_model_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customVoiceDeploymentId">CustomVoiceDeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#custom_voice_deployment_id BotChannelDirectLineSpeech#custom_voice_deployment_id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#id BotChannelDirectLineSpeech#id}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BotName`<sup>Required</sup> <a name="BotName" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.botName"></a>

```csharp
public string BotName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#bot_name BotChannelDirectLineSpeech#bot_name}.

---

##### `CognitiveServiceAccessKey`<sup>Required</sup> <a name="CognitiveServiceAccessKey" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceAccessKey"></a>

```csharp
public string CognitiveServiceAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_access_key BotChannelDirectLineSpeech#cognitive_service_access_key}.

---

##### `CognitiveServiceLocation`<sup>Required</sup> <a name="CognitiveServiceLocation" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveServiceLocation"></a>

```csharp
public string CognitiveServiceLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#cognitive_service_location BotChannelDirectLineSpeech#cognitive_service_location}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#location BotChannelDirectLineSpeech#location}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#resource_group_name BotChannelDirectLineSpeech#resource_group_name}.

---

##### `CognitiveAccountId`<sup>Optional</sup> <a name="CognitiveAccountId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.cognitiveAccountId"></a>

```csharp
public string CognitiveAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#cognitive_account_id BotChannelDirectLineSpeech#cognitive_account_id}.

---

##### `CustomSpeechModelId`<sup>Optional</sup> <a name="CustomSpeechModelId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customSpeechModelId"></a>

```csharp
public string CustomSpeechModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#custom_speech_model_id BotChannelDirectLineSpeech#custom_speech_model_id}.

---

##### `CustomVoiceDeploymentId`<sup>Optional</sup> <a name="CustomVoiceDeploymentId" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.customVoiceDeploymentId"></a>

```csharp
public string CustomVoiceDeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#custom_voice_deployment_id BotChannelDirectLineSpeech#custom_voice_deployment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#id BotChannelDirectLineSpeech#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechConfig.property.timeouts"></a>

```csharp
public BotChannelDirectLineSpeechTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts">BotChannelDirectLineSpeechTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#timeouts BotChannelDirectLineSpeech#timeouts}

---

### BotChannelDirectLineSpeechTimeouts <a name="BotChannelDirectLineSpeechTimeouts" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BotChannelDirectLineSpeechTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#create BotChannelDirectLineSpeech#create}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#delete BotChannelDirectLineSpeech#delete}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#read BotChannelDirectLineSpeech#read}. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#update BotChannelDirectLineSpeech#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#create BotChannelDirectLineSpeech#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#delete BotChannelDirectLineSpeech#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#read BotChannelDirectLineSpeech#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/bot_channel_direct_line_speech#update BotChannelDirectLineSpeech#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BotChannelDirectLineSpeechTimeoutsOutputReference <a name="BotChannelDirectLineSpeechTimeoutsOutputReference" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new BotChannelDirectLineSpeechTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.botChannelDirectLineSpeech.BotChannelDirectLineSpeechTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



