# `voiceServicesCommunicationsGatewayTestLine` Submodule <a name="`voiceServicesCommunicationsGatewayTestLine` Submodule" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VoiceServicesCommunicationsGatewayTestLine <a name="VoiceServicesCommunicationsGatewayTestLine" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line azurerm_voice_services_communications_gateway_test_line}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VoiceServicesCommunicationsGatewayTestLine(Construct Scope, string Id, VoiceServicesCommunicationsGatewayTestLineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig">VoiceServicesCommunicationsGatewayTestLineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig">VoiceServicesCommunicationsGatewayTestLineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.putTimeouts"></a>

```csharp
private void PutTimeouts(VoiceServicesCommunicationsGatewayTestLineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VoiceServicesCommunicationsGatewayTestLine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VoiceServicesCommunicationsGatewayTestLine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VoiceServicesCommunicationsGatewayTestLine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VoiceServicesCommunicationsGatewayTestLine.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VoiceServicesCommunicationsGatewayTestLine.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VoiceServicesCommunicationsGatewayTestLine resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VoiceServicesCommunicationsGatewayTestLine to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VoiceServicesCommunicationsGatewayTestLine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VoiceServicesCommunicationsGatewayTestLine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference">VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.purposeInput">PurposeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.voiceServicesCommunicationsGatewayIdInput">VoiceServicesCommunicationsGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.purpose">Purpose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.voiceServicesCommunicationsGatewayId">VoiceServicesCommunicationsGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.timeouts"></a>

```csharp
public VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference">VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.phoneNumberInput"></a>

```csharp
public string PhoneNumberInput { get; }
```

- *Type:* string

---

##### `PurposeInput`<sup>Optional</sup> <a name="PurposeInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.purposeInput"></a>

```csharp
public string PurposeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VoiceServicesCommunicationsGatewayIdInput`<sup>Optional</sup> <a name="VoiceServicesCommunicationsGatewayIdInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.voiceServicesCommunicationsGatewayIdInput"></a>

```csharp
public string VoiceServicesCommunicationsGatewayIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; }
```

- *Type:* string

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.purpose"></a>

```csharp
public string Purpose { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VoiceServicesCommunicationsGatewayId`<sup>Required</sup> <a name="VoiceServicesCommunicationsGatewayId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.voiceServicesCommunicationsGatewayId"></a>

```csharp
public string VoiceServicesCommunicationsGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VoiceServicesCommunicationsGatewayTestLineConfig <a name="VoiceServicesCommunicationsGatewayTestLineConfig" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VoiceServicesCommunicationsGatewayTestLineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string PhoneNumber,
    string Purpose,
    string VoiceServicesCommunicationsGatewayId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    VoiceServicesCommunicationsGatewayTestLineTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#location VoiceServicesCommunicationsGatewayTestLine#location}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#name VoiceServicesCommunicationsGatewayTestLine#name}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.phoneNumber">PhoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#phone_number VoiceServicesCommunicationsGatewayTestLine#phone_number}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.purpose">Purpose</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#purpose VoiceServicesCommunicationsGatewayTestLine#purpose}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.voiceServicesCommunicationsGatewayId">VoiceServicesCommunicationsGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#voice_services_communications_gateway_id VoiceServicesCommunicationsGatewayTestLine#voice_services_communications_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#id VoiceServicesCommunicationsGatewayTestLine#id}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#tags VoiceServicesCommunicationsGatewayTestLine#tags}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#location VoiceServicesCommunicationsGatewayTestLine#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#name VoiceServicesCommunicationsGatewayTestLine#name}.

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.phoneNumber"></a>

```csharp
public string PhoneNumber { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#phone_number VoiceServicesCommunicationsGatewayTestLine#phone_number}.

---

##### `Purpose`<sup>Required</sup> <a name="Purpose" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.purpose"></a>

```csharp
public string Purpose { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#purpose VoiceServicesCommunicationsGatewayTestLine#purpose}.

---

##### `VoiceServicesCommunicationsGatewayId`<sup>Required</sup> <a name="VoiceServicesCommunicationsGatewayId" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.voiceServicesCommunicationsGatewayId"></a>

```csharp
public string VoiceServicesCommunicationsGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#voice_services_communications_gateway_id VoiceServicesCommunicationsGatewayTestLine#voice_services_communications_gateway_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#id VoiceServicesCommunicationsGatewayTestLine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#tags VoiceServicesCommunicationsGatewayTestLine#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineConfig.property.timeouts"></a>

```csharp
public VoiceServicesCommunicationsGatewayTestLineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts">VoiceServicesCommunicationsGatewayTestLineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#timeouts VoiceServicesCommunicationsGatewayTestLine#timeouts}

---

### VoiceServicesCommunicationsGatewayTestLineTimeouts <a name="VoiceServicesCommunicationsGatewayTestLineTimeouts" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VoiceServicesCommunicationsGatewayTestLineTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#create VoiceServicesCommunicationsGatewayTestLine#create}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#delete VoiceServicesCommunicationsGatewayTestLine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#read VoiceServicesCommunicationsGatewayTestLine#read}. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#update VoiceServicesCommunicationsGatewayTestLine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#create VoiceServicesCommunicationsGatewayTestLine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#delete VoiceServicesCommunicationsGatewayTestLine#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#read VoiceServicesCommunicationsGatewayTestLine#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/voice_services_communications_gateway_test_line#update VoiceServicesCommunicationsGatewayTestLine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference <a name="VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.voiceServicesCommunicationsGatewayTestLine.VoiceServicesCommunicationsGatewayTestLineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



