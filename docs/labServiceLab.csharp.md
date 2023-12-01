# `labServiceLab` Submodule <a name="`labServiceLab` Submodule" id="@cdktf/provider-azurerm.labServiceLab"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LabServiceLab <a name="LabServiceLab" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab azurerm_lab_service_lab}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLab(Construct Scope, string Id, LabServiceLabConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig">LabServiceLabConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig">LabServiceLabConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown">PutAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting">PutConnectionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster">PutRoster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity">PutSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine">PutVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetAutoShutdown">ResetAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetConnectionSetting">ResetConnectionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetLabPlanId">ResetLabPlanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetRoster">ResetRoster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutAutoShutdown` <a name="PutAutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown"></a>

```csharp
private void PutAutoShutdown(LabServiceLabAutoShutdown Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putAutoShutdown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

---

##### `PutConnectionSetting` <a name="PutConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting"></a>

```csharp
private void PutConnectionSetting(LabServiceLabConnectionSetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putConnectionSetting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork"></a>

```csharp
private void PutNetwork(LabServiceLabNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

---

##### `PutRoster` <a name="PutRoster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster"></a>

```csharp
private void PutRoster(LabServiceLabRoster Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putRoster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

---

##### `PutSecurity` <a name="PutSecurity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity"></a>

```csharp
private void PutSecurity(LabServiceLabSecurity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts"></a>

```csharp
private void PutTimeouts(LabServiceLabTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

---

##### `PutVirtualMachine` <a name="PutVirtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine"></a>

```csharp
private void PutVirtualMachine(LabServiceLabVirtualMachine Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.putVirtualMachine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

---

##### `ResetAutoShutdown` <a name="ResetAutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetAutoShutdown"></a>

```csharp
private void ResetAutoShutdown()
```

##### `ResetConnectionSetting` <a name="ResetConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetConnectionSetting"></a>

```csharp
private void ResetConnectionSetting()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabPlanId` <a name="ResetLabPlanId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetLabPlanId"></a>

```csharp
private void ResetLabPlanId()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetRoster` <a name="ResetRoster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetRoster"></a>

```csharp
private void ResetRoster()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LabServiceLab resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LabServiceLab.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LabServiceLab.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LabServiceLab.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LabServiceLab.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LabServiceLab resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LabServiceLab to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LabServiceLab that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LabServiceLab to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdown">AutoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference">LabServiceLabAutoShutdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSetting">ConnectionSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference">LabServiceLabConnectionSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference">LabServiceLabNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.roster">Roster</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference">LabServiceLabRosterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference">LabServiceLabSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference">LabServiceLabTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference">LabServiceLabVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdownInput">AutoShutdownInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSettingInput">ConnectionSettingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanIdInput">LabPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.rosterInput">RosterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.securityInput">SecurityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachineInput">VirtualMachineInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanId">LabPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.title">Title</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoShutdown`<sup>Required</sup> <a name="AutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdown"></a>

```csharp
public LabServiceLabAutoShutdownOutputReference AutoShutdown { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference">LabServiceLabAutoShutdownOutputReference</a>

---

##### `ConnectionSetting`<sup>Required</sup> <a name="ConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSetting"></a>

```csharp
public LabServiceLabConnectionSettingOutputReference ConnectionSetting { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference">LabServiceLabConnectionSettingOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.network"></a>

```csharp
public LabServiceLabNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference">LabServiceLabNetworkOutputReference</a>

---

##### `Roster`<sup>Required</sup> <a name="Roster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.roster"></a>

```csharp
public LabServiceLabRosterOutputReference Roster { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference">LabServiceLabRosterOutputReference</a>

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.security"></a>

```csharp
public LabServiceLabSecurityOutputReference Security { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference">LabServiceLabSecurityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeouts"></a>

```csharp
public LabServiceLabTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference">LabServiceLabTimeoutsOutputReference</a>

---

##### `VirtualMachine`<sup>Required</sup> <a name="VirtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachine"></a>

```csharp
public LabServiceLabVirtualMachineOutputReference VirtualMachine { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference">LabServiceLabVirtualMachineOutputReference</a>

---

##### `AutoShutdownInput`<sup>Optional</sup> <a name="AutoShutdownInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.autoShutdownInput"></a>

```csharp
public LabServiceLabAutoShutdown AutoShutdownInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

---

##### `ConnectionSettingInput`<sup>Optional</sup> <a name="ConnectionSettingInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.connectionSettingInput"></a>

```csharp
public LabServiceLabConnectionSetting ConnectionSettingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabPlanIdInput`<sup>Optional</sup> <a name="LabPlanIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanIdInput"></a>

```csharp
public string LabPlanIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.networkInput"></a>

```csharp
public LabServiceLabNetwork NetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RosterInput`<sup>Optional</sup> <a name="RosterInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.rosterInput"></a>

```csharp
public LabServiceLabRoster RosterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

---

##### `SecurityInput`<sup>Optional</sup> <a name="SecurityInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.securityInput"></a>

```csharp
public LabServiceLabSecurity SecurityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `VirtualMachineInput`<sup>Optional</sup> <a name="VirtualMachineInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.virtualMachineInput"></a>

```csharp
public LabServiceLabVirtualMachine VirtualMachineInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LabPlanId`<sup>Required</sup> <a name="LabPlanId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.labPlanId"></a>

```csharp
public string LabPlanId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLab.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LabServiceLabAutoShutdown <a name="LabServiceLabAutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabAutoShutdown {
    string DisconnectDelay = null,
    string IdleDelay = null,
    string NoConnectDelay = null,
    string ShutdownOnIdle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.disconnectDelay">DisconnectDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#disconnect_delay LabServiceLab#disconnect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.idleDelay">IdleDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#idle_delay LabServiceLab#idle_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.noConnectDelay">NoConnectDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#no_connect_delay LabServiceLab#no_connect_delay}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.shutdownOnIdle">ShutdownOnIdle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#shutdown_on_idle LabServiceLab#shutdown_on_idle}. |

---

##### `DisconnectDelay`<sup>Optional</sup> <a name="DisconnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.disconnectDelay"></a>

```csharp
public string DisconnectDelay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#disconnect_delay LabServiceLab#disconnect_delay}.

---

##### `IdleDelay`<sup>Optional</sup> <a name="IdleDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.idleDelay"></a>

```csharp
public string IdleDelay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#idle_delay LabServiceLab#idle_delay}.

---

##### `NoConnectDelay`<sup>Optional</sup> <a name="NoConnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.noConnectDelay"></a>

```csharp
public string NoConnectDelay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#no_connect_delay LabServiceLab#no_connect_delay}.

---

##### `ShutdownOnIdle`<sup>Optional</sup> <a name="ShutdownOnIdle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown.property.shutdownOnIdle"></a>

```csharp
public string ShutdownOnIdle { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#shutdown_on_idle LabServiceLab#shutdown_on_idle}.

---

### LabServiceLabConfig <a name="LabServiceLabConfig" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabConfig {
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
    LabServiceLabSecurity Security,
    string Title,
    LabServiceLabVirtualMachine VirtualMachine,
    LabServiceLabAutoShutdown AutoShutdown = null,
    LabServiceLabConnectionSetting ConnectionSetting = null,
    string Description = null,
    string Id = null,
    string LabPlanId = null,
    LabServiceLabNetwork Network = null,
    LabServiceLabRoster Roster = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    LabServiceLabTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#location LabServiceLab#location}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#name LabServiceLab#name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.security">Security</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | security block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#title LabServiceLab#title}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | virtual_machine block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.autoShutdown">AutoShutdown</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | auto_shutdown block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connectionSetting">ConnectionSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | connection_setting block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#description LabServiceLab#description}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#id LabServiceLab#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.labPlanId">LabPlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.network">Network</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.roster">Roster</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | roster block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#tags LabServiceLab#tags}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#location LabServiceLab#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#name LabServiceLab#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#resource_group_name LabServiceLab#resource_group_name}.

---

##### `Security`<sup>Required</sup> <a name="Security" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.security"></a>

```csharp
public LabServiceLabSecurity Security { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#security LabServiceLab#security}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#title LabServiceLab#title}.

---

##### `VirtualMachine`<sup>Required</sup> <a name="VirtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.virtualMachine"></a>

```csharp
public LabServiceLabVirtualMachine VirtualMachine { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#virtual_machine LabServiceLab#virtual_machine}

---

##### `AutoShutdown`<sup>Optional</sup> <a name="AutoShutdown" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.autoShutdown"></a>

```csharp
public LabServiceLabAutoShutdown AutoShutdown { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

auto_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#auto_shutdown LabServiceLab#auto_shutdown}

---

##### `ConnectionSetting`<sup>Optional</sup> <a name="ConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.connectionSetting"></a>

```csharp
public LabServiceLabConnectionSetting ConnectionSetting { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

connection_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#connection_setting LabServiceLab#connection_setting}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#description LabServiceLab#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#id LabServiceLab#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LabPlanId`<sup>Optional</sup> <a name="LabPlanId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.labPlanId"></a>

```csharp
public string LabPlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#lab_plan_id LabServiceLab#lab_plan_id}.

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.network"></a>

```csharp
public LabServiceLabNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#network LabServiceLab#network}

---

##### `Roster`<sup>Optional</sup> <a name="Roster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.roster"></a>

```csharp
public LabServiceLabRoster Roster { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

roster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#roster LabServiceLab#roster}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#tags LabServiceLab#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConfig.property.timeouts"></a>

```csharp
public LabServiceLabTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts">LabServiceLabTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#timeouts LabServiceLab#timeouts}

---

### LabServiceLabConnectionSetting <a name="LabServiceLabConnectionSetting" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabConnectionSetting {
    string ClientRdpAccess = null,
    string ClientSshAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientRdpAccess">ClientRdpAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#client_rdp_access LabServiceLab#client_rdp_access}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientSshAccess">ClientSshAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#client_ssh_access LabServiceLab#client_ssh_access}. |

---

##### `ClientRdpAccess`<sup>Optional</sup> <a name="ClientRdpAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientRdpAccess"></a>

```csharp
public string ClientRdpAccess { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#client_rdp_access LabServiceLab#client_rdp_access}.

---

##### `ClientSshAccess`<sup>Optional</sup> <a name="ClientSshAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting.property.clientSshAccess"></a>

```csharp
public string ClientSshAccess { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#client_ssh_access LabServiceLab#client_ssh_access}.

---

### LabServiceLabNetwork <a name="LabServiceLabNetwork" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabNetwork {
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#subnet_id LabServiceLab#subnet_id}. |

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#subnet_id LabServiceLab#subnet_id}.

---

### LabServiceLabRoster <a name="LabServiceLabRoster" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabRoster {
    string ActiveDirectoryGroupId = null,
    string LmsInstance = null,
    string LtiClientId = null,
    string LtiContextId = null,
    string LtiRosterEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.activeDirectoryGroupId">ActiveDirectoryGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#active_directory_group_id LabServiceLab#active_directory_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.lmsInstance">LmsInstance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#lms_instance LabServiceLab#lms_instance}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiClientId">LtiClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#lti_client_id LabServiceLab#lti_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiContextId">LtiContextId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#lti_context_id LabServiceLab#lti_context_id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiRosterEndpoint">LtiRosterEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#lti_roster_endpoint LabServiceLab#lti_roster_endpoint}. |

---

##### `ActiveDirectoryGroupId`<sup>Optional</sup> <a name="ActiveDirectoryGroupId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.activeDirectoryGroupId"></a>

```csharp
public string ActiveDirectoryGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#active_directory_group_id LabServiceLab#active_directory_group_id}.

---

##### `LmsInstance`<sup>Optional</sup> <a name="LmsInstance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.lmsInstance"></a>

```csharp
public string LmsInstance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#lms_instance LabServiceLab#lms_instance}.

---

##### `LtiClientId`<sup>Optional</sup> <a name="LtiClientId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiClientId"></a>

```csharp
public string LtiClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#lti_client_id LabServiceLab#lti_client_id}.

---

##### `LtiContextId`<sup>Optional</sup> <a name="LtiContextId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiContextId"></a>

```csharp
public string LtiContextId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#lti_context_id LabServiceLab#lti_context_id}.

---

##### `LtiRosterEndpoint`<sup>Optional</sup> <a name="LtiRosterEndpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster.property.ltiRosterEndpoint"></a>

```csharp
public string LtiRosterEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#lti_roster_endpoint LabServiceLab#lti_roster_endpoint}.

---

### LabServiceLabSecurity <a name="LabServiceLabSecurity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabSecurity {
    object OpenAccessEnabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.property.openAccessEnabled">OpenAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#open_access_enabled LabServiceLab#open_access_enabled}. |

---

##### `OpenAccessEnabled`<sup>Required</sup> <a name="OpenAccessEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity.property.openAccessEnabled"></a>

```csharp
public object OpenAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#open_access_enabled LabServiceLab#open_access_enabled}.

---

### LabServiceLabTimeouts <a name="LabServiceLabTimeouts" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#create LabServiceLab#create}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#delete LabServiceLab#delete}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#read LabServiceLab#read}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#update LabServiceLab#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#create LabServiceLab#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#delete LabServiceLab#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#read LabServiceLab#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#update LabServiceLab#update}.

---

### LabServiceLabVirtualMachine <a name="LabServiceLabVirtualMachine" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabVirtualMachine {
    LabServiceLabVirtualMachineAdminUser AdminUser,
    LabServiceLabVirtualMachineImageReference ImageReference,
    LabServiceLabVirtualMachineSku Sku,
    object AdditionalCapabilityGpuDriversInstalled = null,
    string CreateOption = null,
    LabServiceLabVirtualMachineNonAdminUser NonAdminUser = null,
    object SharedPasswordEnabled = null,
    string UsageQuota = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.adminUser">AdminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | admin_user block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.imageReference">ImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | image_reference block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.additionalCapabilityGpuDriversInstalled">AdditionalCapabilityGpuDriversInstalled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#additional_capability_gpu_drivers_installed LabServiceLab#additional_capability_gpu_drivers_installed}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.createOption">CreateOption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#create_option LabServiceLab#create_option}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.nonAdminUser">NonAdminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | non_admin_user block. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sharedPasswordEnabled">SharedPasswordEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#shared_password_enabled LabServiceLab#shared_password_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.usageQuota">UsageQuota</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#usage_quota LabServiceLab#usage_quota}. |

---

##### `AdminUser`<sup>Required</sup> <a name="AdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.adminUser"></a>

```csharp
public LabServiceLabVirtualMachineAdminUser AdminUser { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

admin_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#admin_user LabServiceLab#admin_user}

---

##### `ImageReference`<sup>Required</sup> <a name="ImageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.imageReference"></a>

```csharp
public LabServiceLabVirtualMachineImageReference ImageReference { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

image_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#image_reference LabServiceLab#image_reference}

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sku"></a>

```csharp
public LabServiceLabVirtualMachineSku Sku { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}

---

##### `AdditionalCapabilityGpuDriversInstalled`<sup>Optional</sup> <a name="AdditionalCapabilityGpuDriversInstalled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.additionalCapabilityGpuDriversInstalled"></a>

```csharp
public object AdditionalCapabilityGpuDriversInstalled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#additional_capability_gpu_drivers_installed LabServiceLab#additional_capability_gpu_drivers_installed}.

---

##### `CreateOption`<sup>Optional</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.createOption"></a>

```csharp
public string CreateOption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#create_option LabServiceLab#create_option}.

---

##### `NonAdminUser`<sup>Optional</sup> <a name="NonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.nonAdminUser"></a>

```csharp
public LabServiceLabVirtualMachineNonAdminUser NonAdminUser { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

non_admin_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#non_admin_user LabServiceLab#non_admin_user}

---

##### `SharedPasswordEnabled`<sup>Optional</sup> <a name="SharedPasswordEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.sharedPasswordEnabled"></a>

```csharp
public object SharedPasswordEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#shared_password_enabled LabServiceLab#shared_password_enabled}.

---

##### `UsageQuota`<sup>Optional</sup> <a name="UsageQuota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine.property.usageQuota"></a>

```csharp
public string UsageQuota { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#usage_quota LabServiceLab#usage_quota}.

---

### LabServiceLabVirtualMachineAdminUser <a name="LabServiceLabVirtualMachineAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabVirtualMachineAdminUser {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#password LabServiceLab#password}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#username LabServiceLab#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#password LabServiceLab#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#username LabServiceLab#username}.

---

### LabServiceLabVirtualMachineImageReference <a name="LabServiceLabVirtualMachineImageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabVirtualMachineImageReference {
    string Id = null,
    string Offer = null,
    string Publisher = null,
    string Sku = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#id LabServiceLab#id}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.offer">Offer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#offer LabServiceLab#offer}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.publisher">Publisher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#publisher LabServiceLab#publisher}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.sku">Sku</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#version LabServiceLab#version}. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#id LabServiceLab#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Offer`<sup>Optional</sup> <a name="Offer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.offer"></a>

```csharp
public string Offer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#offer LabServiceLab#offer}.

---

##### `Publisher`<sup>Optional</sup> <a name="Publisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.publisher"></a>

```csharp
public string Publisher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#publisher LabServiceLab#publisher}.

---

##### `Sku`<sup>Optional</sup> <a name="Sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.sku"></a>

```csharp
public string Sku { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#sku LabServiceLab#sku}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#version LabServiceLab#version}.

---

### LabServiceLabVirtualMachineNonAdminUser <a name="LabServiceLabVirtualMachineNonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabVirtualMachineNonAdminUser {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#password LabServiceLab#password}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#username LabServiceLab#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#password LabServiceLab#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#username LabServiceLab#username}.

---

### LabServiceLabVirtualMachineSku <a name="LabServiceLabVirtualMachineSku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabVirtualMachineSku {
    double Capacity,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.capacity">Capacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#capacity LabServiceLab#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#name LabServiceLab#name}. |

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.capacity"></a>

```csharp
public double Capacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#capacity LabServiceLab#capacity}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/lab_service_lab#name LabServiceLab#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### LabServiceLabAutoShutdownOutputReference <a name="LabServiceLabAutoShutdownOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabAutoShutdownOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetDisconnectDelay">ResetDisconnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetIdleDelay">ResetIdleDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetNoConnectDelay">ResetNoConnectDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetShutdownOnIdle">ResetShutdownOnIdle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisconnectDelay` <a name="ResetDisconnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetDisconnectDelay"></a>

```csharp
private void ResetDisconnectDelay()
```

##### `ResetIdleDelay` <a name="ResetIdleDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetIdleDelay"></a>

```csharp
private void ResetIdleDelay()
```

##### `ResetNoConnectDelay` <a name="ResetNoConnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetNoConnectDelay"></a>

```csharp
private void ResetNoConnectDelay()
```

##### `ResetShutdownOnIdle` <a name="ResetShutdownOnIdle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.resetShutdownOnIdle"></a>

```csharp
private void ResetShutdownOnIdle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelayInput">DisconnectDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelayInput">IdleDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelayInput">NoConnectDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdleInput">ShutdownOnIdleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelay">DisconnectDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelay">IdleDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelay">NoConnectDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdle">ShutdownOnIdle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisconnectDelayInput`<sup>Optional</sup> <a name="DisconnectDelayInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelayInput"></a>

```csharp
public string DisconnectDelayInput { get; }
```

- *Type:* string

---

##### `IdleDelayInput`<sup>Optional</sup> <a name="IdleDelayInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelayInput"></a>

```csharp
public string IdleDelayInput { get; }
```

- *Type:* string

---

##### `NoConnectDelayInput`<sup>Optional</sup> <a name="NoConnectDelayInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelayInput"></a>

```csharp
public string NoConnectDelayInput { get; }
```

- *Type:* string

---

##### `ShutdownOnIdleInput`<sup>Optional</sup> <a name="ShutdownOnIdleInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdleInput"></a>

```csharp
public string ShutdownOnIdleInput { get; }
```

- *Type:* string

---

##### `DisconnectDelay`<sup>Required</sup> <a name="DisconnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.disconnectDelay"></a>

```csharp
public string DisconnectDelay { get; }
```

- *Type:* string

---

##### `IdleDelay`<sup>Required</sup> <a name="IdleDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.idleDelay"></a>

```csharp
public string IdleDelay { get; }
```

- *Type:* string

---

##### `NoConnectDelay`<sup>Required</sup> <a name="NoConnectDelay" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.noConnectDelay"></a>

```csharp
public string NoConnectDelay { get; }
```

- *Type:* string

---

##### `ShutdownOnIdle`<sup>Required</sup> <a name="ShutdownOnIdle" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.shutdownOnIdle"></a>

```csharp
public string ShutdownOnIdle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdownOutputReference.property.internalValue"></a>

```csharp
public LabServiceLabAutoShutdown InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabAutoShutdown">LabServiceLabAutoShutdown</a>

---


### LabServiceLabConnectionSettingOutputReference <a name="LabServiceLabConnectionSettingOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabConnectionSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientRdpAccess">ResetClientRdpAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientSshAccess">ResetClientSshAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientRdpAccess` <a name="ResetClientRdpAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientRdpAccess"></a>

```csharp
private void ResetClientRdpAccess()
```

##### `ResetClientSshAccess` <a name="ResetClientSshAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.resetClientSshAccess"></a>

```csharp
private void ResetClientSshAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccessInput">ClientRdpAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccessInput">ClientSshAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccess">ClientRdpAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccess">ClientSshAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientRdpAccessInput`<sup>Optional</sup> <a name="ClientRdpAccessInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccessInput"></a>

```csharp
public string ClientRdpAccessInput { get; }
```

- *Type:* string

---

##### `ClientSshAccessInput`<sup>Optional</sup> <a name="ClientSshAccessInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccessInput"></a>

```csharp
public string ClientSshAccessInput { get; }
```

- *Type:* string

---

##### `ClientRdpAccess`<sup>Required</sup> <a name="ClientRdpAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientRdpAccess"></a>

```csharp
public string ClientRdpAccess { get; }
```

- *Type:* string

---

##### `ClientSshAccess`<sup>Required</sup> <a name="ClientSshAccess" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.clientSshAccess"></a>

```csharp
public string ClientSshAccess { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSettingOutputReference.property.internalValue"></a>

```csharp
public LabServiceLabConnectionSetting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabConnectionSetting">LabServiceLabConnectionSetting</a>

---


### LabServiceLabNetworkOutputReference <a name="LabServiceLabNetworkOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.publicIpId">PublicIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `PublicIpId`<sup>Required</sup> <a name="PublicIpId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.publicIpId"></a>

```csharp
public string PublicIpId { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetworkOutputReference.property.internalValue"></a>

```csharp
public LabServiceLabNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabNetwork">LabServiceLabNetwork</a>

---


### LabServiceLabRosterOutputReference <a name="LabServiceLabRosterOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabRosterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetActiveDirectoryGroupId">ResetActiveDirectoryGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLmsInstance">ResetLmsInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiClientId">ResetLtiClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiContextId">ResetLtiContextId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiRosterEndpoint">ResetLtiRosterEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveDirectoryGroupId` <a name="ResetActiveDirectoryGroupId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetActiveDirectoryGroupId"></a>

```csharp
private void ResetActiveDirectoryGroupId()
```

##### `ResetLmsInstance` <a name="ResetLmsInstance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLmsInstance"></a>

```csharp
private void ResetLmsInstance()
```

##### `ResetLtiClientId` <a name="ResetLtiClientId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiClientId"></a>

```csharp
private void ResetLtiClientId()
```

##### `ResetLtiContextId` <a name="ResetLtiContextId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiContextId"></a>

```csharp
private void ResetLtiContextId()
```

##### `ResetLtiRosterEndpoint` <a name="ResetLtiRosterEndpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.resetLtiRosterEndpoint"></a>

```csharp
private void ResetLtiRosterEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupIdInput">ActiveDirectoryGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstanceInput">LmsInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientIdInput">LtiClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextIdInput">LtiContextIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpointInput">LtiRosterEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupId">ActiveDirectoryGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstance">LmsInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientId">LtiClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextId">LtiContextId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpoint">LtiRosterEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectoryGroupIdInput`<sup>Optional</sup> <a name="ActiveDirectoryGroupIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupIdInput"></a>

```csharp
public string ActiveDirectoryGroupIdInput { get; }
```

- *Type:* string

---

##### `LmsInstanceInput`<sup>Optional</sup> <a name="LmsInstanceInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstanceInput"></a>

```csharp
public string LmsInstanceInput { get; }
```

- *Type:* string

---

##### `LtiClientIdInput`<sup>Optional</sup> <a name="LtiClientIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientIdInput"></a>

```csharp
public string LtiClientIdInput { get; }
```

- *Type:* string

---

##### `LtiContextIdInput`<sup>Optional</sup> <a name="LtiContextIdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextIdInput"></a>

```csharp
public string LtiContextIdInput { get; }
```

- *Type:* string

---

##### `LtiRosterEndpointInput`<sup>Optional</sup> <a name="LtiRosterEndpointInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpointInput"></a>

```csharp
public string LtiRosterEndpointInput { get; }
```

- *Type:* string

---

##### `ActiveDirectoryGroupId`<sup>Required</sup> <a name="ActiveDirectoryGroupId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.activeDirectoryGroupId"></a>

```csharp
public string ActiveDirectoryGroupId { get; }
```

- *Type:* string

---

##### `LmsInstance`<sup>Required</sup> <a name="LmsInstance" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.lmsInstance"></a>

```csharp
public string LmsInstance { get; }
```

- *Type:* string

---

##### `LtiClientId`<sup>Required</sup> <a name="LtiClientId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiClientId"></a>

```csharp
public string LtiClientId { get; }
```

- *Type:* string

---

##### `LtiContextId`<sup>Required</sup> <a name="LtiContextId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiContextId"></a>

```csharp
public string LtiContextId { get; }
```

- *Type:* string

---

##### `LtiRosterEndpoint`<sup>Required</sup> <a name="LtiRosterEndpoint" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.ltiRosterEndpoint"></a>

```csharp
public string LtiRosterEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabRosterOutputReference.property.internalValue"></a>

```csharp
public LabServiceLabRoster InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabRoster">LabServiceLabRoster</a>

---


### LabServiceLabSecurityOutputReference <a name="LabServiceLabSecurityOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabSecurityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.registrationCode">RegistrationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabledInput">OpenAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabled">OpenAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegistrationCode`<sup>Required</sup> <a name="RegistrationCode" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.registrationCode"></a>

```csharp
public string RegistrationCode { get; }
```

- *Type:* string

---

##### `OpenAccessEnabledInput`<sup>Optional</sup> <a name="OpenAccessEnabledInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabledInput"></a>

```csharp
public object OpenAccessEnabledInput { get; }
```

- *Type:* object

---

##### `OpenAccessEnabled`<sup>Required</sup> <a name="OpenAccessEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.openAccessEnabled"></a>

```csharp
public object OpenAccessEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurityOutputReference.property.internalValue"></a>

```csharp
public LabServiceLabSecurity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabSecurity">LabServiceLabSecurity</a>

---


### LabServiceLabTimeoutsOutputReference <a name="LabServiceLabTimeoutsOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LabServiceLabVirtualMachineAdminUserOutputReference <a name="LabServiceLabVirtualMachineAdminUserOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabVirtualMachineAdminUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference.property.internalValue"></a>

```csharp
public LabServiceLabVirtualMachineAdminUser InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

---


### LabServiceLabVirtualMachineImageReferenceOutputReference <a name="LabServiceLabVirtualMachineImageReferenceOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabVirtualMachineImageReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetOffer">ResetOffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetPublisher">ResetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetSku">ResetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOffer` <a name="ResetOffer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetOffer"></a>

```csharp
private void ResetOffer()
```

##### `ResetPublisher` <a name="ResetPublisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetPublisher"></a>

```csharp
private void ResetPublisher()
```

##### `ResetSku` <a name="ResetSku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetSku"></a>

```csharp
private void ResetSku()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offerInput">OfferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisherInput">PublisherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.skuInput">SkuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offer">Offer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.sku">Sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OfferInput`<sup>Optional</sup> <a name="OfferInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offerInput"></a>

```csharp
public string OfferInput { get; }
```

- *Type:* string

---

##### `PublisherInput`<sup>Optional</sup> <a name="PublisherInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisherInput"></a>

```csharp
public string PublisherInput { get; }
```

- *Type:* string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.skuInput"></a>

```csharp
public string SkuInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Offer`<sup>Required</sup> <a name="Offer" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.offer"></a>

```csharp
public string Offer { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.sku"></a>

```csharp
public string Sku { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference.property.internalValue"></a>

```csharp
public LabServiceLabVirtualMachineImageReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

---


### LabServiceLabVirtualMachineNonAdminUserOutputReference <a name="LabServiceLabVirtualMachineNonAdminUserOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabVirtualMachineNonAdminUserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference.property.internalValue"></a>

```csharp
public LabServiceLabVirtualMachineNonAdminUser InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

---


### LabServiceLabVirtualMachineOutputReference <a name="LabServiceLabVirtualMachineOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabVirtualMachineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser">PutAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference">PutImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser">PutNonAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku">PutSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetAdditionalCapabilityGpuDriversInstalled">ResetAdditionalCapabilityGpuDriversInstalled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetCreateOption">ResetCreateOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetNonAdminUser">ResetNonAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetSharedPasswordEnabled">ResetSharedPasswordEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetUsageQuota">ResetUsageQuota</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminUser` <a name="PutAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser"></a>

```csharp
private void PutAdminUser(LabServiceLabVirtualMachineAdminUser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putAdminUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

---

##### `PutImageReference` <a name="PutImageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference"></a>

```csharp
private void PutImageReference(LabServiceLabVirtualMachineImageReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putImageReference.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

---

##### `PutNonAdminUser` <a name="PutNonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser"></a>

```csharp
private void PutNonAdminUser(LabServiceLabVirtualMachineNonAdminUser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putNonAdminUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

---

##### `PutSku` <a name="PutSku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku"></a>

```csharp
private void PutSku(LabServiceLabVirtualMachineSku Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

---

##### `ResetAdditionalCapabilityGpuDriversInstalled` <a name="ResetAdditionalCapabilityGpuDriversInstalled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetAdditionalCapabilityGpuDriversInstalled"></a>

```csharp
private void ResetAdditionalCapabilityGpuDriversInstalled()
```

##### `ResetCreateOption` <a name="ResetCreateOption" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetCreateOption"></a>

```csharp
private void ResetCreateOption()
```

##### `ResetNonAdminUser` <a name="ResetNonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetNonAdminUser"></a>

```csharp
private void ResetNonAdminUser()
```

##### `ResetSharedPasswordEnabled` <a name="ResetSharedPasswordEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetSharedPasswordEnabled"></a>

```csharp
private void ResetSharedPasswordEnabled()
```

##### `ResetUsageQuota` <a name="ResetUsageQuota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.resetUsageQuota"></a>

```csharp
private void ResetUsageQuota()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUser">AdminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference">LabServiceLabVirtualMachineAdminUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReference">ImageReference</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference">LabServiceLabVirtualMachineImageReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUser">NonAdminUser</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference">LabServiceLabVirtualMachineNonAdminUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference">LabServiceLabVirtualMachineSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalledInput">AdditionalCapabilityGpuDriversInstalledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUserInput">AdminUserInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOptionInput">CreateOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReferenceInput">ImageReferenceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUserInput">NonAdminUserInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabledInput">SharedPasswordEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.skuInput">SkuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuotaInput">UsageQuotaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalled">AdditionalCapabilityGpuDriversInstalled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOption">CreateOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabled">SharedPasswordEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuota">UsageQuota</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminUser`<sup>Required</sup> <a name="AdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUser"></a>

```csharp
public LabServiceLabVirtualMachineAdminUserOutputReference AdminUser { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUserOutputReference">LabServiceLabVirtualMachineAdminUserOutputReference</a>

---

##### `ImageReference`<sup>Required</sup> <a name="ImageReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReference"></a>

```csharp
public LabServiceLabVirtualMachineImageReferenceOutputReference ImageReference { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReferenceOutputReference">LabServiceLabVirtualMachineImageReferenceOutputReference</a>

---

##### `NonAdminUser`<sup>Required</sup> <a name="NonAdminUser" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUser"></a>

```csharp
public LabServiceLabVirtualMachineNonAdminUserOutputReference NonAdminUser { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUserOutputReference">LabServiceLabVirtualMachineNonAdminUserOutputReference</a>

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sku"></a>

```csharp
public LabServiceLabVirtualMachineSkuOutputReference Sku { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference">LabServiceLabVirtualMachineSkuOutputReference</a>

---

##### `AdditionalCapabilityGpuDriversInstalledInput`<sup>Optional</sup> <a name="AdditionalCapabilityGpuDriversInstalledInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalledInput"></a>

```csharp
public object AdditionalCapabilityGpuDriversInstalledInput { get; }
```

- *Type:* object

---

##### `AdminUserInput`<sup>Optional</sup> <a name="AdminUserInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.adminUserInput"></a>

```csharp
public LabServiceLabVirtualMachineAdminUser AdminUserInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineAdminUser">LabServiceLabVirtualMachineAdminUser</a>

---

##### `CreateOptionInput`<sup>Optional</sup> <a name="CreateOptionInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOptionInput"></a>

```csharp
public string CreateOptionInput { get; }
```

- *Type:* string

---

##### `ImageReferenceInput`<sup>Optional</sup> <a name="ImageReferenceInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.imageReferenceInput"></a>

```csharp
public LabServiceLabVirtualMachineImageReference ImageReferenceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineImageReference">LabServiceLabVirtualMachineImageReference</a>

---

##### `NonAdminUserInput`<sup>Optional</sup> <a name="NonAdminUserInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.nonAdminUserInput"></a>

```csharp
public LabServiceLabVirtualMachineNonAdminUser NonAdminUserInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineNonAdminUser">LabServiceLabVirtualMachineNonAdminUser</a>

---

##### `SharedPasswordEnabledInput`<sup>Optional</sup> <a name="SharedPasswordEnabledInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabledInput"></a>

```csharp
public object SharedPasswordEnabledInput { get; }
```

- *Type:* object

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.skuInput"></a>

```csharp
public LabServiceLabVirtualMachineSku SkuInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

---

##### `UsageQuotaInput`<sup>Optional</sup> <a name="UsageQuotaInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuotaInput"></a>

```csharp
public string UsageQuotaInput { get; }
```

- *Type:* string

---

##### `AdditionalCapabilityGpuDriversInstalled`<sup>Required</sup> <a name="AdditionalCapabilityGpuDriversInstalled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.additionalCapabilityGpuDriversInstalled"></a>

```csharp
public object AdditionalCapabilityGpuDriversInstalled { get; }
```

- *Type:* object

---

##### `CreateOption`<sup>Required</sup> <a name="CreateOption" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.createOption"></a>

```csharp
public string CreateOption { get; }
```

- *Type:* string

---

##### `SharedPasswordEnabled`<sup>Required</sup> <a name="SharedPasswordEnabled" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.sharedPasswordEnabled"></a>

```csharp
public object SharedPasswordEnabled { get; }
```

- *Type:* object

---

##### `UsageQuota`<sup>Required</sup> <a name="UsageQuota" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.usageQuota"></a>

```csharp
public string UsageQuota { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineOutputReference.property.internalValue"></a>

```csharp
public LabServiceLabVirtualMachine InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachine">LabServiceLabVirtualMachine</a>

---


### LabServiceLabVirtualMachineSkuOutputReference <a name="LabServiceLabVirtualMachineSkuOutputReference" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LabServiceLabVirtualMachineSkuOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacityInput">CapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacityInput"></a>

```csharp
public double CapacityInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSkuOutputReference.property.internalValue"></a>

```csharp
public LabServiceLabVirtualMachineSku InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.labServiceLab.LabServiceLabVirtualMachineSku">LabServiceLabVirtualMachineSku</a>

---



