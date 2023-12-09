# `eventgridTopic` Submodule <a name="`eventgridTopic` Submodule" id="@cdktf/provider-azurerm.eventgridTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventgridTopic <a name="EventgridTopic" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic azurerm_eventgrid_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridTopic(Construct Scope, string Id, EventgridTopicConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig">EventgridTopicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig">EventgridTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putInboundIpRule">PutInboundIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putInputMappingDefaultValues">PutInputMappingDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putInputMappingFields">PutInputMappingFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetInboundIpRule">ResetInboundIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetInputMappingDefaultValues">ResetInputMappingDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetInputMappingFields">ResetInputMappingFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetInputSchema">ResetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetLocalAuthEnabled">ResetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putIdentity"></a>

```csharp
private void PutIdentity(EventgridTopicIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentity">EventgridTopicIdentity</a>

---

##### `PutInboundIpRule` <a name="PutInboundIpRule" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putInboundIpRule"></a>

```csharp
private void PutInboundIpRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putInboundIpRule.parameter.value"></a>

- *Type:* object

---

##### `PutInputMappingDefaultValues` <a name="PutInputMappingDefaultValues" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putInputMappingDefaultValues"></a>

```csharp
private void PutInputMappingDefaultValues(EventgridTopicInputMappingDefaultValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putInputMappingDefaultValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues">EventgridTopicInputMappingDefaultValues</a>

---

##### `PutInputMappingFields` <a name="PutInputMappingFields" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putInputMappingFields"></a>

```csharp
private void PutInputMappingFields(EventgridTopicInputMappingFields Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putInputMappingFields.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields">EventgridTopicInputMappingFields</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putTimeouts"></a>

```csharp
private void PutTimeouts(EventgridTopicTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeouts">EventgridTopicTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetInboundIpRule` <a name="ResetInboundIpRule" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetInboundIpRule"></a>

```csharp
private void ResetInboundIpRule()
```

##### `ResetInputMappingDefaultValues` <a name="ResetInputMappingDefaultValues" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetInputMappingDefaultValues"></a>

```csharp
private void ResetInputMappingDefaultValues()
```

##### `ResetInputMappingFields` <a name="ResetInputMappingFields" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetInputMappingFields"></a>

```csharp
private void ResetInputMappingFields()
```

##### `ResetInputSchema` <a name="ResetInputSchema" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetInputSchema"></a>

```csharp
private void ResetInputSchema()
```

##### `ResetLocalAuthEnabled` <a name="ResetLocalAuthEnabled" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetLocalAuthEnabled"></a>

```csharp
private void ResetLocalAuthEnabled()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventgridTopic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridTopic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridTopic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridTopic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

EventgridTopic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EventgridTopic resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventgridTopic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventgridTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EventgridTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference">EventgridTopicIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inboundIpRule">InboundIpRule</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList">EventgridTopicInboundIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inputMappingDefaultValues">InputMappingDefaultValues</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference">EventgridTopicInputMappingDefaultValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inputMappingFields">InputMappingFields</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference">EventgridTopicInputMappingFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference">EventgridTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentity">EventgridTopicIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inboundIpRuleInput">InboundIpRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inputMappingDefaultValuesInput">InputMappingDefaultValuesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues">EventgridTopicInputMappingDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inputMappingFieldsInput">InputMappingFieldsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields">EventgridTopicInputMappingFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inputSchemaInput">InputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.localAuthEnabledInput">LocalAuthEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inputSchema">InputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.identity"></a>

```csharp
public EventgridTopicIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference">EventgridTopicIdentityOutputReference</a>

---

##### `InboundIpRule`<sup>Required</sup> <a name="InboundIpRule" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inboundIpRule"></a>

```csharp
public EventgridTopicInboundIpRuleList InboundIpRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList">EventgridTopicInboundIpRuleList</a>

---

##### `InputMappingDefaultValues`<sup>Required</sup> <a name="InputMappingDefaultValues" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inputMappingDefaultValues"></a>

```csharp
public EventgridTopicInputMappingDefaultValuesOutputReference InputMappingDefaultValues { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference">EventgridTopicInputMappingDefaultValuesOutputReference</a>

---

##### `InputMappingFields`<sup>Required</sup> <a name="InputMappingFields" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inputMappingFields"></a>

```csharp
public EventgridTopicInputMappingFieldsOutputReference InputMappingFields { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference">EventgridTopicInputMappingFieldsOutputReference</a>

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.primaryAccessKey"></a>

```csharp
public string PrimaryAccessKey { get; }
```

- *Type:* string

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.secondaryAccessKey"></a>

```csharp
public string SecondaryAccessKey { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.timeouts"></a>

```csharp
public EventgridTopicTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference">EventgridTopicTimeoutsOutputReference</a>

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.identityInput"></a>

```csharp
public EventgridTopicIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentity">EventgridTopicIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InboundIpRuleInput`<sup>Optional</sup> <a name="InboundIpRuleInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inboundIpRuleInput"></a>

```csharp
public object InboundIpRuleInput { get; }
```

- *Type:* object

---

##### `InputMappingDefaultValuesInput`<sup>Optional</sup> <a name="InputMappingDefaultValuesInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inputMappingDefaultValuesInput"></a>

```csharp
public EventgridTopicInputMappingDefaultValues InputMappingDefaultValuesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues">EventgridTopicInputMappingDefaultValues</a>

---

##### `InputMappingFieldsInput`<sup>Optional</sup> <a name="InputMappingFieldsInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inputMappingFieldsInput"></a>

```csharp
public EventgridTopicInputMappingFields InputMappingFieldsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields">EventgridTopicInputMappingFields</a>

---

##### `InputSchemaInput`<sup>Optional</sup> <a name="InputSchemaInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inputSchemaInput"></a>

```csharp
public string InputSchemaInput { get; }
```

- *Type:* string

---

##### `LocalAuthEnabledInput`<sup>Optional</sup> <a name="LocalAuthEnabledInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.localAuthEnabledInput"></a>

```csharp
public object LocalAuthEnabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.inputSchema"></a>

```csharp
public string InputSchema { get; }
```

- *Type:* string

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.localAuthEnabled"></a>

```csharp
public object LocalAuthEnabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventgridTopicConfig <a name="EventgridTopicConfig" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridTopicConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string Id = null,
    EventgridTopicIdentity Identity = null,
    object InboundIpRule = null,
    EventgridTopicInputMappingDefaultValues InputMappingDefaultValues = null,
    EventgridTopicInputMappingFields InputMappingFields = null,
    string InputSchema = null,
    object LocalAuthEnabled = null,
    object PublicNetworkAccessEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    EventgridTopicTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#location EventgridTopic#location}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#name EventgridTopic#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#resource_group_name EventgridTopic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#id EventgridTopic#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentity">EventgridTopicIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.inboundIpRule">InboundIpRule</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#inbound_ip_rule EventgridTopic#inbound_ip_rule}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.inputMappingDefaultValues">InputMappingDefaultValues</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues">EventgridTopicInputMappingDefaultValues</a></code> | input_mapping_default_values block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.inputMappingFields">InputMappingFields</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields">EventgridTopicInputMappingFields</a></code> | input_mapping_fields block. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.inputSchema">InputSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#input_schema EventgridTopic#input_schema}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#local_auth_enabled EventgridTopic#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#public_network_access_enabled EventgridTopic#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#tags EventgridTopic#tags}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeouts">EventgridTopicTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#location EventgridTopic#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#name EventgridTopic#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#resource_group_name EventgridTopic#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#id EventgridTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.identity"></a>

```csharp
public EventgridTopicIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentity">EventgridTopicIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#identity EventgridTopic#identity}

---

##### `InboundIpRule`<sup>Optional</sup> <a name="InboundIpRule" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.inboundIpRule"></a>

```csharp
public object InboundIpRule { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#inbound_ip_rule EventgridTopic#inbound_ip_rule}.

---

##### `InputMappingDefaultValues`<sup>Optional</sup> <a name="InputMappingDefaultValues" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.inputMappingDefaultValues"></a>

```csharp
public EventgridTopicInputMappingDefaultValues InputMappingDefaultValues { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues">EventgridTopicInputMappingDefaultValues</a>

input_mapping_default_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#input_mapping_default_values EventgridTopic#input_mapping_default_values}

---

##### `InputMappingFields`<sup>Optional</sup> <a name="InputMappingFields" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.inputMappingFields"></a>

```csharp
public EventgridTopicInputMappingFields InputMappingFields { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields">EventgridTopicInputMappingFields</a>

input_mapping_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#input_mapping_fields EventgridTopic#input_mapping_fields}

---

##### `InputSchema`<sup>Optional</sup> <a name="InputSchema" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.inputSchema"></a>

```csharp
public string InputSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#input_schema EventgridTopic#input_schema}.

---

##### `LocalAuthEnabled`<sup>Optional</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.localAuthEnabled"></a>

```csharp
public object LocalAuthEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#local_auth_enabled EventgridTopic#local_auth_enabled}.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#public_network_access_enabled EventgridTopic#public_network_access_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#tags EventgridTopic#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicConfig.property.timeouts"></a>

```csharp
public EventgridTopicTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeouts">EventgridTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#timeouts EventgridTopic#timeouts}

---

### EventgridTopicIdentity <a name="EventgridTopicIdentity" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridTopicIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#type EventgridTopic#type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#identity_ids EventgridTopic#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#type EventgridTopic#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#identity_ids EventgridTopic#identity_ids}.

---

### EventgridTopicInboundIpRule <a name="EventgridTopicInboundIpRule" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridTopicInboundIpRule {
    string Action = null,
    string IpMask = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRule.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#action EventgridTopic#action}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRule.property.ipMask">IpMask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#ip_mask EventgridTopic#ip_mask}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRule.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#action EventgridTopic#action}.

---

##### `IpMask`<sup>Optional</sup> <a name="IpMask" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRule.property.ipMask"></a>

```csharp
public string IpMask { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#ip_mask EventgridTopic#ip_mask}.

---

### EventgridTopicInputMappingDefaultValues <a name="EventgridTopicInputMappingDefaultValues" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridTopicInputMappingDefaultValues {
    string DataVersion = null,
    string EventType = null,
    string Subject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues.property.dataVersion">DataVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#data_version EventgridTopic#data_version}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues.property.eventType">EventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#event_type EventgridTopic#event_type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#subject EventgridTopic#subject}. |

---

##### `DataVersion`<sup>Optional</sup> <a name="DataVersion" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues.property.dataVersion"></a>

```csharp
public string DataVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#data_version EventgridTopic#data_version}.

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#event_type EventgridTopic#event_type}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#subject EventgridTopic#subject}.

---

### EventgridTopicInputMappingFields <a name="EventgridTopicInputMappingFields" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridTopicInputMappingFields {
    string DataVersion = null,
    string EventTime = null,
    string EventType = null,
    string Id = null,
    string Subject = null,
    string Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields.property.dataVersion">DataVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#data_version EventgridTopic#data_version}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields.property.eventTime">EventTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#event_time EventgridTopic#event_time}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields.property.eventType">EventType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#event_type EventgridTopic#event_type}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#id EventgridTopic#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#subject EventgridTopic#subject}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields.property.topic">Topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#topic EventgridTopic#topic}. |

---

##### `DataVersion`<sup>Optional</sup> <a name="DataVersion" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields.property.dataVersion"></a>

```csharp
public string DataVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#data_version EventgridTopic#data_version}.

---

##### `EventTime`<sup>Optional</sup> <a name="EventTime" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields.property.eventTime"></a>

```csharp
public string EventTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#event_time EventgridTopic#event_time}.

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#event_type EventgridTopic#event_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#id EventgridTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#subject EventgridTopic#subject}.

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#topic EventgridTopic#topic}.

---

### EventgridTopicTimeouts <a name="EventgridTopicTimeouts" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridTopicTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#create EventgridTopic#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#delete EventgridTopic#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#read EventgridTopic#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#update EventgridTopic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#create EventgridTopic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#delete EventgridTopic#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#read EventgridTopic#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/eventgrid_topic#update EventgridTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventgridTopicIdentityOutputReference <a name="EventgridTopicIdentityOutputReference" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridTopicIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentity">EventgridTopicIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentityOutputReference.property.internalValue"></a>

```csharp
public EventgridTopicIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicIdentity">EventgridTopicIdentity</a>

---


### EventgridTopicInboundIpRuleList <a name="EventgridTopicInboundIpRuleList" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridTopicInboundIpRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.get"></a>

```csharp
private EventgridTopicInboundIpRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridTopicInboundIpRuleOutputReference <a name="EventgridTopicInboundIpRuleOutputReference" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridTopicInboundIpRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.resetIpMask">ResetIpMask</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetIpMask` <a name="ResetIpMask" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.resetIpMask"></a>

```csharp
private void ResetIpMask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.property.ipMaskInput">IpMaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.property.ipMask">IpMask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `IpMaskInput`<sup>Optional</sup> <a name="IpMaskInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.property.ipMaskInput"></a>

```csharp
public string IpMaskInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IpMask`<sup>Required</sup> <a name="IpMask" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.property.ipMask"></a>

```csharp
public string IpMask { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInboundIpRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventgridTopicInputMappingDefaultValuesOutputReference <a name="EventgridTopicInputMappingDefaultValuesOutputReference" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridTopicInputMappingDefaultValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.resetDataVersion">ResetDataVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.resetEventType">ResetEventType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataVersion` <a name="ResetDataVersion" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.resetDataVersion"></a>

```csharp
private void ResetDataVersion()
```

##### `ResetEventType` <a name="ResetEventType" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.resetEventType"></a>

```csharp
private void ResetEventType()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.dataVersionInput">DataVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.dataVersion">DataVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues">EventgridTopicInputMappingDefaultValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataVersionInput`<sup>Optional</sup> <a name="DataVersionInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.dataVersionInput"></a>

```csharp
public string DataVersionInput { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `DataVersion`<sup>Required</sup> <a name="DataVersion" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.dataVersion"></a>

```csharp
public string DataVersion { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValuesOutputReference.property.internalValue"></a>

```csharp
public EventgridTopicInputMappingDefaultValues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingDefaultValues">EventgridTopicInputMappingDefaultValues</a>

---


### EventgridTopicInputMappingFieldsOutputReference <a name="EventgridTopicInputMappingFieldsOutputReference" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridTopicInputMappingFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resetDataVersion">ResetDataVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resetEventTime">ResetEventTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resetEventType">ResetEventType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataVersion` <a name="ResetDataVersion" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resetDataVersion"></a>

```csharp
private void ResetDataVersion()
```

##### `ResetEventTime` <a name="ResetEventTime" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resetEventTime"></a>

```csharp
private void ResetEventTime()
```

##### `ResetEventType` <a name="ResetEventType" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resetEventType"></a>

```csharp
private void ResetEventType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.resetTopic"></a>

```csharp
private void ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.dataVersionInput">DataVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.eventTimeInput">EventTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.dataVersion">DataVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.eventTime">EventTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields">EventgridTopicInputMappingFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataVersionInput`<sup>Optional</sup> <a name="DataVersionInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.dataVersionInput"></a>

```csharp
public string DataVersionInput { get; }
```

- *Type:* string

---

##### `EventTimeInput`<sup>Optional</sup> <a name="EventTimeInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.eventTimeInput"></a>

```csharp
public string EventTimeInput { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `DataVersion`<sup>Required</sup> <a name="DataVersion" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.dataVersion"></a>

```csharp
public string DataVersion { get; }
```

- *Type:* string

---

##### `EventTime`<sup>Required</sup> <a name="EventTime" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.eventTime"></a>

```csharp
public string EventTime { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFieldsOutputReference.property.internalValue"></a>

```csharp
public EventgridTopicInputMappingFields InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicInputMappingFields">EventgridTopicInputMappingFields</a>

---


### EventgridTopicTimeoutsOutputReference <a name="EventgridTopicTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new EventgridTopicTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.eventgridTopic.EventgridTopicTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



