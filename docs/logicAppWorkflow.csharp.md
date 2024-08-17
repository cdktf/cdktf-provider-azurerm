# `logicAppWorkflow` Submodule <a name="`logicAppWorkflow` Submodule" id="@cdktf/provider-azurerm.logicAppWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogicAppWorkflow <a name="LogicAppWorkflow" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow azurerm_logic_app_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflow(Construct Scope, string Id, LogicAppWorkflowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig">LogicAppWorkflowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig">LogicAppWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putAccessControl">PutAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetAccessControl">ResetAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetIntegrationServiceEnvironmentId">ResetIntegrationServiceEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetLogicAppIntegrationAccountId">ResetLogicAppIntegrationAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowParameters">ResetWorkflowParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowSchema">ResetWorkflowSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowVersion">ResetWorkflowVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessControl` <a name="PutAccessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putAccessControl"></a>

```csharp
private void PutAccessControl(LogicAppWorkflowAccessControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putIdentity"></a>

```csharp
private void PutIdentity(LogicAppWorkflowIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putTimeouts"></a>

```csharp
private void PutTimeouts(LogicAppWorkflowTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts">LogicAppWorkflowTimeouts</a>

---

##### `ResetAccessControl` <a name="ResetAccessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetAccessControl"></a>

```csharp
private void ResetAccessControl()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetIdentity"></a>

```csharp
private void ResetIdentity()
```

##### `ResetIntegrationServiceEnvironmentId` <a name="ResetIntegrationServiceEnvironmentId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetIntegrationServiceEnvironmentId"></a>

```csharp
private void ResetIntegrationServiceEnvironmentId()
```

##### `ResetLogicAppIntegrationAccountId` <a name="ResetLogicAppIntegrationAccountId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetLogicAppIntegrationAccountId"></a>

```csharp
private void ResetLogicAppIntegrationAccountId()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWorkflowParameters` <a name="ResetWorkflowParameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowParameters"></a>

```csharp
private void ResetWorkflowParameters()
```

##### `ResetWorkflowSchema` <a name="ResetWorkflowSchema" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowSchema"></a>

```csharp
private void ResetWorkflowSchema()
```

##### `ResetWorkflowVersion` <a name="ResetWorkflowVersion" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.resetWorkflowVersion"></a>

```csharp
private void ResetWorkflowVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogicAppWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppWorkflow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppWorkflow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppWorkflow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

LogicAppWorkflow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LogicAppWorkflow resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogicAppWorkflow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogicAppWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LogicAppWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessControl">AccessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference">LogicAppWorkflowAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessEndpoint">AccessEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connectorEndpointIpAddresses">ConnectorEndpointIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connectorOutboundIpAddresses">ConnectorOutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference">LogicAppWorkflowIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference">LogicAppWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowEndpointIpAddresses">WorkflowEndpointIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowOutboundIpAddresses">WorkflowOutboundIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessControlInput">AccessControlInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.integrationServiceEnvironmentIdInput">IntegrationServiceEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.logicAppIntegrationAccountIdInput">LogicAppIntegrationAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowParametersInput">WorkflowParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowSchemaInput">WorkflowSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowVersionInput">WorkflowVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.integrationServiceEnvironmentId">IntegrationServiceEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.logicAppIntegrationAccountId">LogicAppIntegrationAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowParameters">WorkflowParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowSchema">WorkflowSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowVersion">WorkflowVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessControl`<sup>Required</sup> <a name="AccessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessControl"></a>

```csharp
public LogicAppWorkflowAccessControlOutputReference AccessControl { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference">LogicAppWorkflowAccessControlOutputReference</a>

---

##### `AccessEndpoint`<sup>Required</sup> <a name="AccessEndpoint" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessEndpoint"></a>

```csharp
public string AccessEndpoint { get; }
```

- *Type:* string

---

##### `ConnectorEndpointIpAddresses`<sup>Required</sup> <a name="ConnectorEndpointIpAddresses" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connectorEndpointIpAddresses"></a>

```csharp
public string[] ConnectorEndpointIpAddresses { get; }
```

- *Type:* string[]

---

##### `ConnectorOutboundIpAddresses`<sup>Required</sup> <a name="ConnectorOutboundIpAddresses" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.connectorOutboundIpAddresses"></a>

```csharp
public string[] ConnectorOutboundIpAddresses { get; }
```

- *Type:* string[]

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.identity"></a>

```csharp
public LogicAppWorkflowIdentityOutputReference Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference">LogicAppWorkflowIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.timeouts"></a>

```csharp
public LogicAppWorkflowTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference">LogicAppWorkflowTimeoutsOutputReference</a>

---

##### `WorkflowEndpointIpAddresses`<sup>Required</sup> <a name="WorkflowEndpointIpAddresses" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowEndpointIpAddresses"></a>

```csharp
public string[] WorkflowEndpointIpAddresses { get; }
```

- *Type:* string[]

---

##### `WorkflowOutboundIpAddresses`<sup>Required</sup> <a name="WorkflowOutboundIpAddresses" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowOutboundIpAddresses"></a>

```csharp
public string[] WorkflowOutboundIpAddresses { get; }
```

- *Type:* string[]

---

##### `AccessControlInput`<sup>Optional</sup> <a name="AccessControlInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.accessControlInput"></a>

```csharp
public LogicAppWorkflowAccessControl AccessControlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.identityInput"></a>

```csharp
public LogicAppWorkflowIdentity IdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationServiceEnvironmentIdInput`<sup>Optional</sup> <a name="IntegrationServiceEnvironmentIdInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.integrationServiceEnvironmentIdInput"></a>

```csharp
public string IntegrationServiceEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LogicAppIntegrationAccountIdInput`<sup>Optional</sup> <a name="LogicAppIntegrationAccountIdInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.logicAppIntegrationAccountIdInput"></a>

```csharp
public string LogicAppIntegrationAccountIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkflowParametersInput`<sup>Optional</sup> <a name="WorkflowParametersInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowParametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> WorkflowParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkflowSchemaInput`<sup>Optional</sup> <a name="WorkflowSchemaInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowSchemaInput"></a>

```csharp
public string WorkflowSchemaInput { get; }
```

- *Type:* string

---

##### `WorkflowVersionInput`<sup>Optional</sup> <a name="WorkflowVersionInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowVersionInput"></a>

```csharp
public string WorkflowVersionInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationServiceEnvironmentId`<sup>Required</sup> <a name="IntegrationServiceEnvironmentId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.integrationServiceEnvironmentId"></a>

```csharp
public string IntegrationServiceEnvironmentId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `LogicAppIntegrationAccountId`<sup>Required</sup> <a name="LogicAppIntegrationAccountId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.logicAppIntegrationAccountId"></a>

```csharp
public string LogicAppIntegrationAccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkflowParameters`<sup>Required</sup> <a name="WorkflowParameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> WorkflowParameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WorkflowSchema`<sup>Required</sup> <a name="WorkflowSchema" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowSchema"></a>

```csharp
public string WorkflowSchema { get; }
```

- *Type:* string

---

##### `WorkflowVersion`<sup>Required</sup> <a name="WorkflowVersion" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.workflowVersion"></a>

```csharp
public string WorkflowVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogicAppWorkflowAccessControl <a name="LogicAppWorkflowAccessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControl {
    LogicAppWorkflowAccessControlAction Action = null,
    LogicAppWorkflowAccessControlContent Content = null,
    LogicAppWorkflowAccessControlTrigger Trigger = null,
    LogicAppWorkflowAccessControlWorkflowManagement WorkflowManagement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.content">Content</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a></code> | content block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a></code> | trigger block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.workflowManagement">WorkflowManagement</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a></code> | workflow_management block. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.action"></a>

```csharp
public LogicAppWorkflowAccessControlAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#action LogicAppWorkflow#action}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.content"></a>

```csharp
public LogicAppWorkflowAccessControlContent Content { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a>

content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#content LogicAppWorkflow#content}

---

##### `Trigger`<sup>Optional</sup> <a name="Trigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.trigger"></a>

```csharp
public LogicAppWorkflowAccessControlTrigger Trigger { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#trigger LogicAppWorkflow#trigger}

---

##### `WorkflowManagement`<sup>Optional</sup> <a name="WorkflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl.property.workflowManagement"></a>

```csharp
public LogicAppWorkflowAccessControlWorkflowManagement WorkflowManagement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a>

workflow_management block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#workflow_management LogicAppWorkflow#workflow_management}

---

### LogicAppWorkflowAccessControlAction <a name="LogicAppWorkflowAccessControlAction" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlAction {
    string[] AllowedCallerIpAddressRange
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}. |

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction.property.allowedCallerIpAddressRange"></a>

```csharp
public string[] AllowedCallerIpAddressRange { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}.

---

### LogicAppWorkflowAccessControlContent <a name="LogicAppWorkflowAccessControlContent" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlContent {
    string[] AllowedCallerIpAddressRange
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}. |

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent.property.allowedCallerIpAddressRange"></a>

```csharp
public string[] AllowedCallerIpAddressRange { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}.

---

### LogicAppWorkflowAccessControlTrigger <a name="LogicAppWorkflowAccessControlTrigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlTrigger {
    string[] AllowedCallerIpAddressRange,
    object OpenAuthenticationPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.property.openAuthenticationPolicy">OpenAuthenticationPolicy</a></code> | <code>object</code> | open_authentication_policy block. |

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.property.allowedCallerIpAddressRange"></a>

```csharp
public string[] AllowedCallerIpAddressRange { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}.

---

##### `OpenAuthenticationPolicy`<sup>Optional</sup> <a name="OpenAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger.property.openAuthenticationPolicy"></a>

```csharp
public object OpenAuthenticationPolicy { get; set; }
```

- *Type:* object

open_authentication_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#open_authentication_policy LogicAppWorkflow#open_authentication_policy}

---

### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy {
    object Claim,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.property.claim">Claim</a></code> | <code>object</code> | claim block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}. |

---

##### `Claim`<sup>Required</sup> <a name="Claim" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.property.claim"></a>

```csharp
public object Claim { get; set; }
```

- *Type:* object

claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#claim LogicAppWorkflow#claim}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicy.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}.

---

### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#value LogicAppWorkflow#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaim.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#value LogicAppWorkflow#value}.

---

### LogicAppWorkflowAccessControlWorkflowManagement <a name="LogicAppWorkflowAccessControlWorkflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlWorkflowManagement {
    string[] AllowedCallerIpAddressRange
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}. |

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement.property.allowedCallerIpAddressRange"></a>

```csharp
public string[] AllowedCallerIpAddressRange { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#allowed_caller_ip_address_range LogicAppWorkflow#allowed_caller_ip_address_range}.

---

### LogicAppWorkflowConfig <a name="LogicAppWorkflowConfig" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowConfig {
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
    LogicAppWorkflowAccessControl AccessControl = null,
    object Enabled = null,
    string Id = null,
    LogicAppWorkflowIdentity Identity = null,
    string IntegrationServiceEnvironmentId = null,
    string LogicAppIntegrationAccountId = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    LogicAppWorkflowTimeouts Timeouts = null,
    System.Collections.Generic.IDictionary<string, string> WorkflowParameters = null,
    string WorkflowSchema = null,
    string WorkflowVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#location LogicAppWorkflow#location}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#resource_group_name LogicAppWorkflow#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.accessControl">AccessControl</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a></code> | access_control block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#enabled LogicAppWorkflow#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#id LogicAppWorkflow#id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.integrationServiceEnvironmentId">IntegrationServiceEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#integration_service_environment_id LogicAppWorkflow#integration_service_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.logicAppIntegrationAccountId">LogicAppIntegrationAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#logic_app_integration_account_id LogicAppWorkflow#logic_app_integration_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#parameters LogicAppWorkflow#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#tags LogicAppWorkflow#tags}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts">LogicAppWorkflowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowParameters">WorkflowParameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#workflow_parameters LogicAppWorkflow#workflow_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowSchema">WorkflowSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#workflow_schema LogicAppWorkflow#workflow_schema}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowVersion">WorkflowVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#workflow_version LogicAppWorkflow#workflow_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#location LogicAppWorkflow#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#name LogicAppWorkflow#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#resource_group_name LogicAppWorkflow#resource_group_name}.

---

##### `AccessControl`<sup>Optional</sup> <a name="AccessControl" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.accessControl"></a>

```csharp
public LogicAppWorkflowAccessControl AccessControl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a>

access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#access_control LogicAppWorkflow#access_control}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#enabled LogicAppWorkflow#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#id LogicAppWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.identity"></a>

```csharp
public LogicAppWorkflowIdentity Identity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#identity LogicAppWorkflow#identity}

---

##### `IntegrationServiceEnvironmentId`<sup>Optional</sup> <a name="IntegrationServiceEnvironmentId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.integrationServiceEnvironmentId"></a>

```csharp
public string IntegrationServiceEnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#integration_service_environment_id LogicAppWorkflow#integration_service_environment_id}.

---

##### `LogicAppIntegrationAccountId`<sup>Optional</sup> <a name="LogicAppIntegrationAccountId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.logicAppIntegrationAccountId"></a>

```csharp
public string LogicAppIntegrationAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#logic_app_integration_account_id LogicAppWorkflow#logic_app_integration_account_id}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#parameters LogicAppWorkflow#parameters}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#tags LogicAppWorkflow#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.timeouts"></a>

```csharp
public LogicAppWorkflowTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts">LogicAppWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#timeouts LogicAppWorkflow#timeouts}

---

##### `WorkflowParameters`<sup>Optional</sup> <a name="WorkflowParameters" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowParameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> WorkflowParameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#workflow_parameters LogicAppWorkflow#workflow_parameters}.

---

##### `WorkflowSchema`<sup>Optional</sup> <a name="WorkflowSchema" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowSchema"></a>

```csharp
public string WorkflowSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#workflow_schema LogicAppWorkflow#workflow_schema}.

---

##### `WorkflowVersion`<sup>Optional</sup> <a name="WorkflowVersion" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowConfig.property.workflowVersion"></a>

```csharp
public string WorkflowVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#workflow_version LogicAppWorkflow#workflow_version}.

---

### LogicAppWorkflowIdentity <a name="LogicAppWorkflowIdentity" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowIdentity {
    string Type,
    string[] IdentityIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#type LogicAppWorkflow#type}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#identity_ids LogicAppWorkflow#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#type LogicAppWorkflow#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#identity_ids LogicAppWorkflow#identity_ids}.

---

### LogicAppWorkflowTimeouts <a name="LogicAppWorkflowTimeouts" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#create LogicAppWorkflow#create}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#delete LogicAppWorkflow#delete}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#read LogicAppWorkflow#read}. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#update LogicAppWorkflow#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#create LogicAppWorkflow#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#delete LogicAppWorkflow#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#read LogicAppWorkflow#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/logic_app_workflow#update LogicAppWorkflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogicAppWorkflowAccessControlActionOutputReference <a name="LogicAppWorkflowAccessControlActionOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.allowedCallerIpAddressRangeInput">AllowedCallerIpAddressRangeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedCallerIpAddressRangeInput`<sup>Optional</sup> <a name="AllowedCallerIpAddressRangeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.allowedCallerIpAddressRangeInput"></a>

```csharp
public string[] AllowedCallerIpAddressRangeInput { get; }
```

- *Type:* string[]

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.allowedCallerIpAddressRange"></a>

```csharp
public string[] AllowedCallerIpAddressRange { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference.property.internalValue"></a>

```csharp
public LogicAppWorkflowAccessControlAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a>

---


### LogicAppWorkflowAccessControlContentOutputReference <a name="LogicAppWorkflowAccessControlContentOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.allowedCallerIpAddressRangeInput">AllowedCallerIpAddressRangeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedCallerIpAddressRangeInput`<sup>Optional</sup> <a name="AllowedCallerIpAddressRangeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.allowedCallerIpAddressRangeInput"></a>

```csharp
public string[] AllowedCallerIpAddressRangeInput { get; }
```

- *Type:* string[]

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.allowedCallerIpAddressRange"></a>

```csharp
public string[] AllowedCallerIpAddressRange { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference.property.internalValue"></a>

```csharp
public LogicAppWorkflowAccessControlContent InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a>

---


### LogicAppWorkflowAccessControlOutputReference <a name="LogicAppWorkflowAccessControlOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putWorkflowManagement">PutWorkflowManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetTrigger">ResetTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetWorkflowManagement">ResetWorkflowManagement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putAction"></a>

```csharp
private void PutAction(LogicAppWorkflowAccessControlAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a>

---

##### `PutContent` <a name="PutContent" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putContent"></a>

```csharp
private void PutContent(LogicAppWorkflowAccessControlContent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a>

---

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putTrigger"></a>

```csharp
private void PutTrigger(LogicAppWorkflowAccessControlTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a>

---

##### `PutWorkflowManagement` <a name="PutWorkflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putWorkflowManagement"></a>

```csharp
private void PutWorkflowManagement(LogicAppWorkflowAccessControlWorkflowManagement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.putWorkflowManagement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetTrigger` <a name="ResetTrigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetTrigger"></a>

```csharp
private void ResetTrigger()
```

##### `ResetWorkflowManagement` <a name="ResetWorkflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.resetWorkflowManagement"></a>

```csharp
private void ResetWorkflowManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference">LogicAppWorkflowAccessControlActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.content">Content</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference">LogicAppWorkflowAccessControlContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference">LogicAppWorkflowAccessControlTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.workflowManagement">WorkflowManagement</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference">LogicAppWorkflowAccessControlWorkflowManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.contentInput">ContentInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.workflowManagementInput">WorkflowManagementInput</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.action"></a>

```csharp
public LogicAppWorkflowAccessControlActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlActionOutputReference">LogicAppWorkflowAccessControlActionOutputReference</a>

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.content"></a>

```csharp
public LogicAppWorkflowAccessControlContentOutputReference Content { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContentOutputReference">LogicAppWorkflowAccessControlContentOutputReference</a>

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.trigger"></a>

```csharp
public LogicAppWorkflowAccessControlTriggerOutputReference Trigger { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference">LogicAppWorkflowAccessControlTriggerOutputReference</a>

---

##### `WorkflowManagement`<sup>Required</sup> <a name="WorkflowManagement" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.workflowManagement"></a>

```csharp
public LogicAppWorkflowAccessControlWorkflowManagementOutputReference WorkflowManagement { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference">LogicAppWorkflowAccessControlWorkflowManagementOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.actionInput"></a>

```csharp
public LogicAppWorkflowAccessControlAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlAction">LogicAppWorkflowAccessControlAction</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.contentInput"></a>

```csharp
public LogicAppWorkflowAccessControlContent ContentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlContent">LogicAppWorkflowAccessControlContent</a>

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.triggerInput"></a>

```csharp
public LogicAppWorkflowAccessControlTrigger TriggerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a>

---

##### `WorkflowManagementInput`<sup>Optional</sup> <a name="WorkflowManagementInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.workflowManagementInput"></a>

```csharp
public LogicAppWorkflowAccessControlWorkflowManagement WorkflowManagementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlOutputReference.property.internalValue"></a>

```csharp
public LogicAppWorkflowAccessControl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControl">LogicAppWorkflowAccessControl</a>

---


### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.get"></a>

```csharp
private LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.get"></a>

```csharp
private LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference <a name="LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.putClaim">PutClaim</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClaim` <a name="PutClaim" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.putClaim"></a>

```csharp
private void PutClaim(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.putClaim.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.claim">Claim</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.claimInput">ClaimInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Claim`<sup>Required</sup> <a name="Claim" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.claim"></a>

```csharp
public LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList Claim { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyClaimList</a>

---

##### `ClaimInput`<sup>Optional</sup> <a name="ClaimInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.claimInput"></a>

```csharp
public object ClaimInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LogicAppWorkflowAccessControlTriggerOutputReference <a name="LogicAppWorkflowAccessControlTriggerOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.putOpenAuthenticationPolicy">PutOpenAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resetOpenAuthenticationPolicy">ResetOpenAuthenticationPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOpenAuthenticationPolicy` <a name="PutOpenAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.putOpenAuthenticationPolicy"></a>

```csharp
private void PutOpenAuthenticationPolicy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.putOpenAuthenticationPolicy.parameter.value"></a>

- *Type:* object

---

##### `ResetOpenAuthenticationPolicy` <a name="ResetOpenAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.resetOpenAuthenticationPolicy"></a>

```csharp
private void ResetOpenAuthenticationPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.openAuthenticationPolicy">OpenAuthenticationPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.allowedCallerIpAddressRangeInput">AllowedCallerIpAddressRangeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.openAuthenticationPolicyInput">OpenAuthenticationPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OpenAuthenticationPolicy`<sup>Required</sup> <a name="OpenAuthenticationPolicy" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.openAuthenticationPolicy"></a>

```csharp
public LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList OpenAuthenticationPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList">LogicAppWorkflowAccessControlTriggerOpenAuthenticationPolicyList</a>

---

##### `AllowedCallerIpAddressRangeInput`<sup>Optional</sup> <a name="AllowedCallerIpAddressRangeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.allowedCallerIpAddressRangeInput"></a>

```csharp
public string[] AllowedCallerIpAddressRangeInput { get; }
```

- *Type:* string[]

---

##### `OpenAuthenticationPolicyInput`<sup>Optional</sup> <a name="OpenAuthenticationPolicyInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.openAuthenticationPolicyInput"></a>

```csharp
public object OpenAuthenticationPolicyInput { get; }
```

- *Type:* object

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.allowedCallerIpAddressRange"></a>

```csharp
public string[] AllowedCallerIpAddressRange { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTriggerOutputReference.property.internalValue"></a>

```csharp
public LogicAppWorkflowAccessControlTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlTrigger">LogicAppWorkflowAccessControlTrigger</a>

---


### LogicAppWorkflowAccessControlWorkflowManagementOutputReference <a name="LogicAppWorkflowAccessControlWorkflowManagementOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowAccessControlWorkflowManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.allowedCallerIpAddressRangeInput">AllowedCallerIpAddressRangeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.allowedCallerIpAddressRange">AllowedCallerIpAddressRange</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedCallerIpAddressRangeInput`<sup>Optional</sup> <a name="AllowedCallerIpAddressRangeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.allowedCallerIpAddressRangeInput"></a>

```csharp
public string[] AllowedCallerIpAddressRangeInput { get; }
```

- *Type:* string[]

---

##### `AllowedCallerIpAddressRange`<sup>Required</sup> <a name="AllowedCallerIpAddressRange" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.allowedCallerIpAddressRange"></a>

```csharp
public string[] AllowedCallerIpAddressRange { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagementOutputReference.property.internalValue"></a>

```csharp
public LogicAppWorkflowAccessControlWorkflowManagement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowAccessControlWorkflowManagement">LogicAppWorkflowAccessControlWorkflowManagement</a>

---


### LogicAppWorkflowIdentityOutputReference <a name="LogicAppWorkflowIdentityOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.resetIdentityIds"></a>

```csharp
private void ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.principalId"></a>

```csharp
public string PrincipalId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.identityIdsInput"></a>

```csharp
public string[] IdentityIdsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.identityIds"></a>

```csharp
public string[] IdentityIds { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentityOutputReference.property.internalValue"></a>

```csharp
public LogicAppWorkflowIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowIdentity">LogicAppWorkflowIdentity</a>

---


### LogicAppWorkflowTimeoutsOutputReference <a name="LogicAppWorkflowTimeoutsOutputReference" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new LogicAppWorkflowTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.logicAppWorkflow.LogicAppWorkflowTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



