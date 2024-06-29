# `automationPowershell72Module` Submodule <a name="`automationPowershell72Module` Submodule" id="@cdktf/provider-azurerm.automationPowershell72Module"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationPowershell72Module <a name="AutomationPowershell72Module" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module azurerm_automation_powershell72_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationPowershell72Module(Construct Scope, string Id, AutomationPowershell72ModuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig">AutomationPowershell72ModuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig">AutomationPowershell72ModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putModuleLink">PutModuleLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutModuleLink` <a name="PutModuleLink" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putModuleLink"></a>

```csharp
private void PutModuleLink(AutomationPowershell72ModuleModuleLink Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putModuleLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putTimeouts"></a>

```csharp
private void PutTimeouts(AutomationPowershell72ModuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AutomationPowershell72Module resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationPowershell72Module.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationPowershell72Module.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationPowershell72Module.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AutomationPowershell72Module.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AutomationPowershell72Module resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutomationPowershell72Module to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutomationPowershell72Module that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AutomationPowershell72Module to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.moduleLink">ModuleLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference">AutomationPowershell72ModuleModuleLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference">AutomationPowershell72ModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.automationAccountIdInput">AutomationAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.moduleLinkInput">ModuleLinkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.automationAccountId">AutomationAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ModuleLink`<sup>Required</sup> <a name="ModuleLink" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.moduleLink"></a>

```csharp
public AutomationPowershell72ModuleModuleLinkOutputReference ModuleLink { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference">AutomationPowershell72ModuleModuleLinkOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.timeouts"></a>

```csharp
public AutomationPowershell72ModuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference">AutomationPowershell72ModuleTimeoutsOutputReference</a>

---

##### `AutomationAccountIdInput`<sup>Optional</sup> <a name="AutomationAccountIdInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.automationAccountIdInput"></a>

```csharp
public string AutomationAccountIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ModuleLinkInput`<sup>Optional</sup> <a name="ModuleLinkInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.moduleLinkInput"></a>

```csharp
public AutomationPowershell72ModuleModuleLink ModuleLinkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutomationAccountId`<sup>Required</sup> <a name="AutomationAccountId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.automationAccountId"></a>

```csharp
public string AutomationAccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72Module.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationPowershell72ModuleConfig <a name="AutomationPowershell72ModuleConfig" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationPowershell72ModuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutomationAccountId,
    AutomationPowershell72ModuleModuleLink ModuleLink,
    string Name,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    AutomationPowershell72ModuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.automationAccountId">AutomationAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#automation_account_id AutomationPowershell72Module#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.moduleLink">ModuleLink</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a></code> | module_link block. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#name AutomationPowershell72Module#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#id AutomationPowershell72Module#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#tags AutomationPowershell72Module#tags}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutomationAccountId`<sup>Required</sup> <a name="AutomationAccountId" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.automationAccountId"></a>

```csharp
public string AutomationAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#automation_account_id AutomationPowershell72Module#automation_account_id}.

---

##### `ModuleLink`<sup>Required</sup> <a name="ModuleLink" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.moduleLink"></a>

```csharp
public AutomationPowershell72ModuleModuleLink ModuleLink { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a>

module_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#module_link AutomationPowershell72Module#module_link}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#name AutomationPowershell72Module#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#id AutomationPowershell72Module#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#tags AutomationPowershell72Module#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleConfig.property.timeouts"></a>

```csharp
public AutomationPowershell72ModuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts">AutomationPowershell72ModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#timeouts AutomationPowershell72Module#timeouts}

---

### AutomationPowershell72ModuleModuleLink <a name="AutomationPowershell72ModuleModuleLink" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationPowershell72ModuleModuleLink {
    string Uri,
    AutomationPowershell72ModuleModuleLinkHash Hash = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#uri AutomationPowershell72Module#uri}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.property.hash">Hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a></code> | hash block. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#uri AutomationPowershell72Module#uri}.

---

##### `Hash`<sup>Optional</sup> <a name="Hash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink.property.hash"></a>

```csharp
public AutomationPowershell72ModuleModuleLinkHash Hash { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a>

hash block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#hash AutomationPowershell72Module#hash}

---

### AutomationPowershell72ModuleModuleLinkHash <a name="AutomationPowershell72ModuleModuleLinkHash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationPowershell72ModuleModuleLinkHash {
    string Algorithm,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.property.algorithm">Algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#algorithm AutomationPowershell72Module#algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#value AutomationPowershell72Module#value}. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#algorithm AutomationPowershell72Module#algorithm}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#value AutomationPowershell72Module#value}.

---

### AutomationPowershell72ModuleTimeouts <a name="AutomationPowershell72ModuleTimeouts" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationPowershell72ModuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#create AutomationPowershell72Module#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#delete AutomationPowershell72Module#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#read AutomationPowershell72Module#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#update AutomationPowershell72Module#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#create AutomationPowershell72Module#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#delete AutomationPowershell72Module#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#read AutomationPowershell72Module#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.110.0/docs/resources/automation_powershell72_module#update AutomationPowershell72Module#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationPowershell72ModuleModuleLinkHashOutputReference <a name="AutomationPowershell72ModuleModuleLinkHashOutputReference" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationPowershell72ModuleModuleLinkHashOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference.property.internalValue"></a>

```csharp
public AutomationPowershell72ModuleModuleLinkHash InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a>

---


### AutomationPowershell72ModuleModuleLinkOutputReference <a name="AutomationPowershell72ModuleModuleLinkOutputReference" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationPowershell72ModuleModuleLinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.putHash">PutHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resetHash">ResetHash</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHash` <a name="PutHash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.putHash"></a>

```csharp
private void PutHash(AutomationPowershell72ModuleModuleLinkHash Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.putHash.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a>

---

##### `ResetHash` <a name="ResetHash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.resetHash"></a>

```csharp
private void ResetHash()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.hash">Hash</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference">AutomationPowershell72ModuleModuleLinkHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.hashInput">HashInput</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.hash"></a>

```csharp
public AutomationPowershell72ModuleModuleLinkHashOutputReference Hash { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHashOutputReference">AutomationPowershell72ModuleModuleLinkHashOutputReference</a>

---

##### `HashInput`<sup>Optional</sup> <a name="HashInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.hashInput"></a>

```csharp
public AutomationPowershell72ModuleModuleLinkHash HashInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkHash">AutomationPowershell72ModuleModuleLinkHash</a>

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLinkOutputReference.property.internalValue"></a>

```csharp
public AutomationPowershell72ModuleModuleLink InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleModuleLink">AutomationPowershell72ModuleModuleLink</a>

---


### AutomationPowershell72ModuleTimeoutsOutputReference <a name="AutomationPowershell72ModuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AutomationPowershell72ModuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.automationPowershell72Module.AutomationPowershell72ModuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



