# `mobileNetworkSimPolicy` Submodule <a name="`mobileNetworkSimPolicy` Submodule" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkSimPolicy <a name="MobileNetworkSimPolicy" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy azurerm_mobile_network_sim_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkSimPolicy(Construct Scope, string Id, MobileNetworkSimPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig">MobileNetworkSimPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig">MobileNetworkSimPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putSlice">PutSlice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putUserEquipmentAggregateMaximumBitRate">PutUserEquipmentAggregateMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetRatFrequencySelectionPriorityIndex">ResetRatFrequencySelectionPriorityIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetRegistrationTimerInSeconds">ResetRegistrationTimerInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSlice` <a name="PutSlice" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putSlice"></a>

```csharp
private void PutSlice(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putSlice.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(MobileNetworkSimPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts">MobileNetworkSimPolicyTimeouts</a>

---

##### `PutUserEquipmentAggregateMaximumBitRate` <a name="PutUserEquipmentAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putUserEquipmentAggregateMaximumBitRate"></a>

```csharp
private void PutUserEquipmentAggregateMaximumBitRate(MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.putUserEquipmentAggregateMaximumBitRate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRatFrequencySelectionPriorityIndex` <a name="ResetRatFrequencySelectionPriorityIndex" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetRatFrequencySelectionPriorityIndex"></a>

```csharp
private void ResetRatFrequencySelectionPriorityIndex()
```

##### `ResetRegistrationTimerInSeconds` <a name="ResetRegistrationTimerInSeconds" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetRegistrationTimerInSeconds"></a>

```csharp
private void ResetRegistrationTimerInSeconds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MobileNetworkSimPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkSimPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkSimPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkSimPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkSimPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MobileNetworkSimPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MobileNetworkSimPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MobileNetworkSimPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkSimPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.slice">Slice</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList">MobileNetworkSimPolicySliceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference">MobileNetworkSimPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.userEquipmentAggregateMaximumBitRate">UserEquipmentAggregateMaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.defaultSliceIdInput">DefaultSliceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.mobileNetworkIdInput">MobileNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.ratFrequencySelectionPriorityIndexInput">RatFrequencySelectionPriorityIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.registrationTimerInSecondsInput">RegistrationTimerInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.sliceInput">SliceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.userEquipmentAggregateMaximumBitRateInput">UserEquipmentAggregateMaximumBitRateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.defaultSliceId">DefaultSliceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.mobileNetworkId">MobileNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.ratFrequencySelectionPriorityIndex">RatFrequencySelectionPriorityIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.registrationTimerInSeconds">RegistrationTimerInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Slice`<sup>Required</sup> <a name="Slice" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.slice"></a>

```csharp
public MobileNetworkSimPolicySliceList Slice { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList">MobileNetworkSimPolicySliceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.timeouts"></a>

```csharp
public MobileNetworkSimPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference">MobileNetworkSimPolicyTimeoutsOutputReference</a>

---

##### `UserEquipmentAggregateMaximumBitRate`<sup>Required</sup> <a name="UserEquipmentAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.userEquipmentAggregateMaximumBitRate"></a>

```csharp
public MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference UserEquipmentAggregateMaximumBitRate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference</a>

---

##### `DefaultSliceIdInput`<sup>Optional</sup> <a name="DefaultSliceIdInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.defaultSliceIdInput"></a>

```csharp
public string DefaultSliceIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MobileNetworkIdInput`<sup>Optional</sup> <a name="MobileNetworkIdInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.mobileNetworkIdInput"></a>

```csharp
public string MobileNetworkIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RatFrequencySelectionPriorityIndexInput`<sup>Optional</sup> <a name="RatFrequencySelectionPriorityIndexInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.ratFrequencySelectionPriorityIndexInput"></a>

```csharp
public double RatFrequencySelectionPriorityIndexInput { get; }
```

- *Type:* double

---

##### `RegistrationTimerInSecondsInput`<sup>Optional</sup> <a name="RegistrationTimerInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.registrationTimerInSecondsInput"></a>

```csharp
public double RegistrationTimerInSecondsInput { get; }
```

- *Type:* double

---

##### `SliceInput`<sup>Optional</sup> <a name="SliceInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.sliceInput"></a>

```csharp
public object SliceInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserEquipmentAggregateMaximumBitRateInput`<sup>Optional</sup> <a name="UserEquipmentAggregateMaximumBitRateInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.userEquipmentAggregateMaximumBitRateInput"></a>

```csharp
public MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate UserEquipmentAggregateMaximumBitRateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a>

---

##### `DefaultSliceId`<sup>Required</sup> <a name="DefaultSliceId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.defaultSliceId"></a>

```csharp
public string DefaultSliceId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MobileNetworkId`<sup>Required</sup> <a name="MobileNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.mobileNetworkId"></a>

```csharp
public string MobileNetworkId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RatFrequencySelectionPriorityIndex`<sup>Required</sup> <a name="RatFrequencySelectionPriorityIndex" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.ratFrequencySelectionPriorityIndex"></a>

```csharp
public double RatFrequencySelectionPriorityIndex { get; }
```

- *Type:* double

---

##### `RegistrationTimerInSeconds`<sup>Required</sup> <a name="RegistrationTimerInSeconds" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.registrationTimerInSeconds"></a>

```csharp
public double RegistrationTimerInSeconds { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkSimPolicyConfig <a name="MobileNetworkSimPolicyConfig" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkSimPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DefaultSliceId,
    string Location,
    string MobileNetworkId,
    string Name,
    object Slice,
    MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate UserEquipmentAggregateMaximumBitRate,
    string Id = null,
    double RatFrequencySelectionPriorityIndex = null,
    double RegistrationTimerInSeconds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MobileNetworkSimPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.defaultSliceId">DefaultSliceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#default_slice_id MobileNetworkSimPolicy#default_slice_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#location MobileNetworkSimPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.mobileNetworkId">MobileNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#mobile_network_id MobileNetworkSimPolicy#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#name MobileNetworkSimPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.slice">Slice</a></code> | <code>object</code> | slice block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.userEquipmentAggregateMaximumBitRate">UserEquipmentAggregateMaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a></code> | user_equipment_aggregate_maximum_bit_rate block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#id MobileNetworkSimPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.ratFrequencySelectionPriorityIndex">RatFrequencySelectionPriorityIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#rat_frequency_selection_priority_index MobileNetworkSimPolicy#rat_frequency_selection_priority_index}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.registrationTimerInSeconds">RegistrationTimerInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#registration_timer_in_seconds MobileNetworkSimPolicy#registration_timer_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#tags MobileNetworkSimPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts">MobileNetworkSimPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultSliceId`<sup>Required</sup> <a name="DefaultSliceId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.defaultSliceId"></a>

```csharp
public string DefaultSliceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#default_slice_id MobileNetworkSimPolicy#default_slice_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#location MobileNetworkSimPolicy#location}.

---

##### `MobileNetworkId`<sup>Required</sup> <a name="MobileNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.mobileNetworkId"></a>

```csharp
public string MobileNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#mobile_network_id MobileNetworkSimPolicy#mobile_network_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#name MobileNetworkSimPolicy#name}.

---

##### `Slice`<sup>Required</sup> <a name="Slice" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.slice"></a>

```csharp
public object Slice { get; set; }
```

- *Type:* object

slice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#slice MobileNetworkSimPolicy#slice}

---

##### `UserEquipmentAggregateMaximumBitRate`<sup>Required</sup> <a name="UserEquipmentAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.userEquipmentAggregateMaximumBitRate"></a>

```csharp
public MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate UserEquipmentAggregateMaximumBitRate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a>

user_equipment_aggregate_maximum_bit_rate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#user_equipment_aggregate_maximum_bit_rate MobileNetworkSimPolicy#user_equipment_aggregate_maximum_bit_rate}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#id MobileNetworkSimPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RatFrequencySelectionPriorityIndex`<sup>Optional</sup> <a name="RatFrequencySelectionPriorityIndex" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.ratFrequencySelectionPriorityIndex"></a>

```csharp
public double RatFrequencySelectionPriorityIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#rat_frequency_selection_priority_index MobileNetworkSimPolicy#rat_frequency_selection_priority_index}.

---

##### `RegistrationTimerInSeconds`<sup>Optional</sup> <a name="RegistrationTimerInSeconds" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.registrationTimerInSeconds"></a>

```csharp
public double RegistrationTimerInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#registration_timer_in_seconds MobileNetworkSimPolicy#registration_timer_in_seconds}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#tags MobileNetworkSimPolicy#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyConfig.property.timeouts"></a>

```csharp
public MobileNetworkSimPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts">MobileNetworkSimPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#timeouts MobileNetworkSimPolicy#timeouts}

---

### MobileNetworkSimPolicySlice <a name="MobileNetworkSimPolicySlice" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkSimPolicySlice {
    object DataNetwork,
    string DefaultDataNetworkId,
    string SliceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice.property.dataNetwork">DataNetwork</a></code> | <code>object</code> | data_network block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice.property.defaultDataNetworkId">DefaultDataNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#default_data_network_id MobileNetworkSimPolicy#default_data_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice.property.sliceId">SliceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#slice_id MobileNetworkSimPolicy#slice_id}. |

---

##### `DataNetwork`<sup>Required</sup> <a name="DataNetwork" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice.property.dataNetwork"></a>

```csharp
public object DataNetwork { get; set; }
```

- *Type:* object

data_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#data_network MobileNetworkSimPolicy#data_network}

---

##### `DefaultDataNetworkId`<sup>Required</sup> <a name="DefaultDataNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice.property.defaultDataNetworkId"></a>

```csharp
public string DefaultDataNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#default_data_network_id MobileNetworkSimPolicy#default_data_network_id}.

---

##### `SliceId`<sup>Required</sup> <a name="SliceId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySlice.property.sliceId"></a>

```csharp
public string SliceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#slice_id MobileNetworkSimPolicy#slice_id}.

---

### MobileNetworkSimPolicySliceDataNetwork <a name="MobileNetworkSimPolicySliceDataNetwork" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkSimPolicySliceDataNetwork {
    string[] AllowedServicesIds,
    string DataNetworkId,
    double QosIndicator,
    MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate SessionAggregateMaximumBitRate,
    string[] AdditionalAllowedSessionTypes = null,
    double AllocationAndRetentionPriorityLevel = null,
    string DefaultSessionType = null,
    double MaxBufferedPackets = null,
    string PreemptionCapability = null,
    string PreemptionVulnerability = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.allowedServicesIds">AllowedServicesIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#allowed_services_ids MobileNetworkSimPolicy#allowed_services_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.dataNetworkId">DataNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#data_network_id MobileNetworkSimPolicy#data_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.qosIndicator">QosIndicator</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#qos_indicator MobileNetworkSimPolicy#qos_indicator}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.sessionAggregateMaximumBitRate">SessionAggregateMaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a></code> | session_aggregate_maximum_bit_rate block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.additionalAllowedSessionTypes">AdditionalAllowedSessionTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#additional_allowed_session_types MobileNetworkSimPolicy#additional_allowed_session_types}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.allocationAndRetentionPriorityLevel">AllocationAndRetentionPriorityLevel</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#allocation_and_retention_priority_level MobileNetworkSimPolicy#allocation_and_retention_priority_level}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.defaultSessionType">DefaultSessionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#default_session_type MobileNetworkSimPolicy#default_session_type}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.maxBufferedPackets">MaxBufferedPackets</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#max_buffered_packets MobileNetworkSimPolicy#max_buffered_packets}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.preemptionCapability">PreemptionCapability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#preemption_capability MobileNetworkSimPolicy#preemption_capability}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.preemptionVulnerability">PreemptionVulnerability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#preemption_vulnerability MobileNetworkSimPolicy#preemption_vulnerability}. |

---

##### `AllowedServicesIds`<sup>Required</sup> <a name="AllowedServicesIds" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.allowedServicesIds"></a>

```csharp
public string[] AllowedServicesIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#allowed_services_ids MobileNetworkSimPolicy#allowed_services_ids}.

---

##### `DataNetworkId`<sup>Required</sup> <a name="DataNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.dataNetworkId"></a>

```csharp
public string DataNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#data_network_id MobileNetworkSimPolicy#data_network_id}.

---

##### `QosIndicator`<sup>Required</sup> <a name="QosIndicator" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.qosIndicator"></a>

```csharp
public double QosIndicator { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#qos_indicator MobileNetworkSimPolicy#qos_indicator}.

---

##### `SessionAggregateMaximumBitRate`<sup>Required</sup> <a name="SessionAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.sessionAggregateMaximumBitRate"></a>

```csharp
public MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate SessionAggregateMaximumBitRate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a>

session_aggregate_maximum_bit_rate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#session_aggregate_maximum_bit_rate MobileNetworkSimPolicy#session_aggregate_maximum_bit_rate}

---

##### `AdditionalAllowedSessionTypes`<sup>Optional</sup> <a name="AdditionalAllowedSessionTypes" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.additionalAllowedSessionTypes"></a>

```csharp
public string[] AdditionalAllowedSessionTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#additional_allowed_session_types MobileNetworkSimPolicy#additional_allowed_session_types}.

---

##### `AllocationAndRetentionPriorityLevel`<sup>Optional</sup> <a name="AllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.allocationAndRetentionPriorityLevel"></a>

```csharp
public double AllocationAndRetentionPriorityLevel { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#allocation_and_retention_priority_level MobileNetworkSimPolicy#allocation_and_retention_priority_level}.

---

##### `DefaultSessionType`<sup>Optional</sup> <a name="DefaultSessionType" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.defaultSessionType"></a>

```csharp
public string DefaultSessionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#default_session_type MobileNetworkSimPolicy#default_session_type}.

---

##### `MaxBufferedPackets`<sup>Optional</sup> <a name="MaxBufferedPackets" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.maxBufferedPackets"></a>

```csharp
public double MaxBufferedPackets { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#max_buffered_packets MobileNetworkSimPolicy#max_buffered_packets}.

---

##### `PreemptionCapability`<sup>Optional</sup> <a name="PreemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.preemptionCapability"></a>

```csharp
public string PreemptionCapability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#preemption_capability MobileNetworkSimPolicy#preemption_capability}.

---

##### `PreemptionVulnerability`<sup>Optional</sup> <a name="PreemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetwork.property.preemptionVulnerability"></a>

```csharp
public string PreemptionVulnerability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#preemption_vulnerability MobileNetworkSimPolicy#preemption_vulnerability}.

---

### MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate <a name="MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate {
    string Downlink,
    string Uplink
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate.property.downlink">Downlink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#downlink MobileNetworkSimPolicy#downlink}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate.property.uplink">Uplink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#uplink MobileNetworkSimPolicy#uplink}. |

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate.property.downlink"></a>

```csharp
public string Downlink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#downlink MobileNetworkSimPolicy#downlink}.

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate.property.uplink"></a>

```csharp
public string Uplink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#uplink MobileNetworkSimPolicy#uplink}.

---

### MobileNetworkSimPolicyTimeouts <a name="MobileNetworkSimPolicyTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkSimPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#create MobileNetworkSimPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#delete MobileNetworkSimPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#read MobileNetworkSimPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#update MobileNetworkSimPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#create MobileNetworkSimPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#delete MobileNetworkSimPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#read MobileNetworkSimPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#update MobileNetworkSimPolicy#update}.

---

### MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate <a name="MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate {
    string Downlink,
    string Uplink
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate.property.downlink">Downlink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#downlink MobileNetworkSimPolicy#downlink}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate.property.uplink">Uplink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#uplink MobileNetworkSimPolicy#uplink}. |

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate.property.downlink"></a>

```csharp
public string Downlink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#downlink MobileNetworkSimPolicy#downlink}.

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate.property.uplink"></a>

```csharp
public string Uplink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mobile_network_sim_policy#uplink MobileNetworkSimPolicy#uplink}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkSimPolicySliceDataNetworkList <a name="MobileNetworkSimPolicySliceDataNetworkList" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkSimPolicySliceDataNetworkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.get"></a>

```csharp
private MobileNetworkSimPolicySliceDataNetworkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MobileNetworkSimPolicySliceDataNetworkOutputReference <a name="MobileNetworkSimPolicySliceDataNetworkOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkSimPolicySliceDataNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.putSessionAggregateMaximumBitRate">PutSessionAggregateMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetAdditionalAllowedSessionTypes">ResetAdditionalAllowedSessionTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetAllocationAndRetentionPriorityLevel">ResetAllocationAndRetentionPriorityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetDefaultSessionType">ResetDefaultSessionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetMaxBufferedPackets">ResetMaxBufferedPackets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetPreemptionCapability">ResetPreemptionCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetPreemptionVulnerability">ResetPreemptionVulnerability</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionAggregateMaximumBitRate` <a name="PutSessionAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.putSessionAggregateMaximumBitRate"></a>

```csharp
private void PutSessionAggregateMaximumBitRate(MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.putSessionAggregateMaximumBitRate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a>

---

##### `ResetAdditionalAllowedSessionTypes` <a name="ResetAdditionalAllowedSessionTypes" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetAdditionalAllowedSessionTypes"></a>

```csharp
private void ResetAdditionalAllowedSessionTypes()
```

##### `ResetAllocationAndRetentionPriorityLevel` <a name="ResetAllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetAllocationAndRetentionPriorityLevel"></a>

```csharp
private void ResetAllocationAndRetentionPriorityLevel()
```

##### `ResetDefaultSessionType` <a name="ResetDefaultSessionType" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetDefaultSessionType"></a>

```csharp
private void ResetDefaultSessionType()
```

##### `ResetMaxBufferedPackets` <a name="ResetMaxBufferedPackets" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetMaxBufferedPackets"></a>

```csharp
private void ResetMaxBufferedPackets()
```

##### `ResetPreemptionCapability` <a name="ResetPreemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetPreemptionCapability"></a>

```csharp
private void ResetPreemptionCapability()
```

##### `ResetPreemptionVulnerability` <a name="ResetPreemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.resetPreemptionVulnerability"></a>

```csharp
private void ResetPreemptionVulnerability()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.sessionAggregateMaximumBitRate">SessionAggregateMaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.additionalAllowedSessionTypesInput">AdditionalAllowedSessionTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allocationAndRetentionPriorityLevelInput">AllocationAndRetentionPriorityLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allowedServicesIdsInput">AllowedServicesIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.dataNetworkIdInput">DataNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.defaultSessionTypeInput">DefaultSessionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.maxBufferedPacketsInput">MaxBufferedPacketsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionCapabilityInput">PreemptionCapabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionVulnerabilityInput">PreemptionVulnerabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.qosIndicatorInput">QosIndicatorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.sessionAggregateMaximumBitRateInput">SessionAggregateMaximumBitRateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.additionalAllowedSessionTypes">AdditionalAllowedSessionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allocationAndRetentionPriorityLevel">AllocationAndRetentionPriorityLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allowedServicesIds">AllowedServicesIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.dataNetworkId">DataNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.defaultSessionType">DefaultSessionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.maxBufferedPackets">MaxBufferedPackets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionCapability">PreemptionCapability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionVulnerability">PreemptionVulnerability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.qosIndicator">QosIndicator</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SessionAggregateMaximumBitRate`<sup>Required</sup> <a name="SessionAggregateMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.sessionAggregateMaximumBitRate"></a>

```csharp
public MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference SessionAggregateMaximumBitRate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference</a>

---

##### `AdditionalAllowedSessionTypesInput`<sup>Optional</sup> <a name="AdditionalAllowedSessionTypesInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.additionalAllowedSessionTypesInput"></a>

```csharp
public string[] AdditionalAllowedSessionTypesInput { get; }
```

- *Type:* string[]

---

##### `AllocationAndRetentionPriorityLevelInput`<sup>Optional</sup> <a name="AllocationAndRetentionPriorityLevelInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allocationAndRetentionPriorityLevelInput"></a>

```csharp
public double AllocationAndRetentionPriorityLevelInput { get; }
```

- *Type:* double

---

##### `AllowedServicesIdsInput`<sup>Optional</sup> <a name="AllowedServicesIdsInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allowedServicesIdsInput"></a>

```csharp
public string[] AllowedServicesIdsInput { get; }
```

- *Type:* string[]

---

##### `DataNetworkIdInput`<sup>Optional</sup> <a name="DataNetworkIdInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.dataNetworkIdInput"></a>

```csharp
public string DataNetworkIdInput { get; }
```

- *Type:* string

---

##### `DefaultSessionTypeInput`<sup>Optional</sup> <a name="DefaultSessionTypeInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.defaultSessionTypeInput"></a>

```csharp
public string DefaultSessionTypeInput { get; }
```

- *Type:* string

---

##### `MaxBufferedPacketsInput`<sup>Optional</sup> <a name="MaxBufferedPacketsInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.maxBufferedPacketsInput"></a>

```csharp
public double MaxBufferedPacketsInput { get; }
```

- *Type:* double

---

##### `PreemptionCapabilityInput`<sup>Optional</sup> <a name="PreemptionCapabilityInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionCapabilityInput"></a>

```csharp
public string PreemptionCapabilityInput { get; }
```

- *Type:* string

---

##### `PreemptionVulnerabilityInput`<sup>Optional</sup> <a name="PreemptionVulnerabilityInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionVulnerabilityInput"></a>

```csharp
public string PreemptionVulnerabilityInput { get; }
```

- *Type:* string

---

##### `QosIndicatorInput`<sup>Optional</sup> <a name="QosIndicatorInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.qosIndicatorInput"></a>

```csharp
public double QosIndicatorInput { get; }
```

- *Type:* double

---

##### `SessionAggregateMaximumBitRateInput`<sup>Optional</sup> <a name="SessionAggregateMaximumBitRateInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.sessionAggregateMaximumBitRateInput"></a>

```csharp
public MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate SessionAggregateMaximumBitRateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a>

---

##### `AdditionalAllowedSessionTypes`<sup>Required</sup> <a name="AdditionalAllowedSessionTypes" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.additionalAllowedSessionTypes"></a>

```csharp
public string[] AdditionalAllowedSessionTypes { get; }
```

- *Type:* string[]

---

##### `AllocationAndRetentionPriorityLevel`<sup>Required</sup> <a name="AllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allocationAndRetentionPriorityLevel"></a>

```csharp
public double AllocationAndRetentionPriorityLevel { get; }
```

- *Type:* double

---

##### `AllowedServicesIds`<sup>Required</sup> <a name="AllowedServicesIds" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.allowedServicesIds"></a>

```csharp
public string[] AllowedServicesIds { get; }
```

- *Type:* string[]

---

##### `DataNetworkId`<sup>Required</sup> <a name="DataNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.dataNetworkId"></a>

```csharp
public string DataNetworkId { get; }
```

- *Type:* string

---

##### `DefaultSessionType`<sup>Required</sup> <a name="DefaultSessionType" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.defaultSessionType"></a>

```csharp
public string DefaultSessionType { get; }
```

- *Type:* string

---

##### `MaxBufferedPackets`<sup>Required</sup> <a name="MaxBufferedPackets" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.maxBufferedPackets"></a>

```csharp
public double MaxBufferedPackets { get; }
```

- *Type:* double

---

##### `PreemptionCapability`<sup>Required</sup> <a name="PreemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionCapability"></a>

```csharp
public string PreemptionCapability { get; }
```

- *Type:* string

---

##### `PreemptionVulnerability`<sup>Required</sup> <a name="PreemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionVulnerability"></a>

```csharp
public string PreemptionVulnerability { get; }
```

- *Type:* string

---

##### `QosIndicator`<sup>Required</sup> <a name="QosIndicator" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.qosIndicator"></a>

```csharp
public double QosIndicator { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference <a name="MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.downlinkInput">DownlinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.uplinkInput">UplinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.downlink">Downlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.uplink">Uplink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DownlinkInput`<sup>Optional</sup> <a name="DownlinkInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.downlinkInput"></a>

```csharp
public string DownlinkInput { get; }
```

- *Type:* string

---

##### `UplinkInput`<sup>Optional</sup> <a name="UplinkInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.uplinkInput"></a>

```csharp
public string UplinkInput { get; }
```

- *Type:* string

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.downlink"></a>

```csharp
public string Downlink { get; }
```

- *Type:* string

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.uplink"></a>

```csharp
public string Uplink { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.internalValue"></a>

```csharp
public MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">MobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a>

---


### MobileNetworkSimPolicySliceList <a name="MobileNetworkSimPolicySliceList" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkSimPolicySliceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.get"></a>

```csharp
private MobileNetworkSimPolicySliceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MobileNetworkSimPolicySliceOutputReference <a name="MobileNetworkSimPolicySliceOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkSimPolicySliceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.putDataNetwork">PutDataNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataNetwork` <a name="PutDataNetwork" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.putDataNetwork"></a>

```csharp
private void PutDataNetwork(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.putDataNetwork.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.dataNetwork">DataNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList">MobileNetworkSimPolicySliceDataNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.dataNetworkInput">DataNetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.defaultDataNetworkIdInput">DefaultDataNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.sliceIdInput">SliceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.defaultDataNetworkId">DefaultDataNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.sliceId">SliceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataNetwork`<sup>Required</sup> <a name="DataNetwork" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.dataNetwork"></a>

```csharp
public MobileNetworkSimPolicySliceDataNetworkList DataNetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceDataNetworkList">MobileNetworkSimPolicySliceDataNetworkList</a>

---

##### `DataNetworkInput`<sup>Optional</sup> <a name="DataNetworkInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.dataNetworkInput"></a>

```csharp
public object DataNetworkInput { get; }
```

- *Type:* object

---

##### `DefaultDataNetworkIdInput`<sup>Optional</sup> <a name="DefaultDataNetworkIdInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.defaultDataNetworkIdInput"></a>

```csharp
public string DefaultDataNetworkIdInput { get; }
```

- *Type:* string

---

##### `SliceIdInput`<sup>Optional</sup> <a name="SliceIdInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.sliceIdInput"></a>

```csharp
public string SliceIdInput { get; }
```

- *Type:* string

---

##### `DefaultDataNetworkId`<sup>Required</sup> <a name="DefaultDataNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.defaultDataNetworkId"></a>

```csharp
public string DefaultDataNetworkId { get; }
```

- *Type:* string

---

##### `SliceId`<sup>Required</sup> <a name="SliceId" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.sliceId"></a>

```csharp
public string SliceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicySliceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MobileNetworkSimPolicyTimeoutsOutputReference <a name="MobileNetworkSimPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkSimPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference <a name="MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.downlinkInput">DownlinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.uplinkInput">UplinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.downlink">Downlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.uplink">Uplink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DownlinkInput`<sup>Optional</sup> <a name="DownlinkInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.downlinkInput"></a>

```csharp
public string DownlinkInput { get; }
```

- *Type:* string

---

##### `UplinkInput`<sup>Optional</sup> <a name="UplinkInput" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.uplinkInput"></a>

```csharp
public string UplinkInput { get; }
```

- *Type:* string

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.downlink"></a>

```csharp
public string Downlink { get; }
```

- *Type:* string

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.uplink"></a>

```csharp
public string Uplink { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.internalValue"></a>

```csharp
public MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimPolicy.MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">MobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a>

---



