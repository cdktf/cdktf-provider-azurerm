# `managementGroupPolicyRemediation` Submodule <a name="`managementGroupPolicyRemediation` Submodule" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementGroupPolicyRemediation <a name="ManagementGroupPolicyRemediation" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation azurerm_management_group_policy_remediation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupPolicyRemediation(Construct Scope, string Id, ManagementGroupPolicyRemediationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig">ManagementGroupPolicyRemediationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig">ManagementGroupPolicyRemediationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetFailurePercentage">ResetFailurePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetLocationFilters">ResetLocationFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetParallelDeployments">ResetParallelDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetPolicyDefinitionReferenceId">ResetPolicyDefinitionReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetResourceCount">ResetResourceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.putTimeouts"></a>

```csharp
private void PutTimeouts(ManagementGroupPolicyRemediationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts">ManagementGroupPolicyRemediationTimeouts</a>

---

##### `ResetFailurePercentage` <a name="ResetFailurePercentage" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetFailurePercentage"></a>

```csharp
private void ResetFailurePercentage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocationFilters` <a name="ResetLocationFilters" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetLocationFilters"></a>

```csharp
private void ResetLocationFilters()
```

##### `ResetParallelDeployments` <a name="ResetParallelDeployments" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetParallelDeployments"></a>

```csharp
private void ResetParallelDeployments()
```

##### `ResetPolicyDefinitionReferenceId` <a name="ResetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetPolicyDefinitionReferenceId"></a>

```csharp
private void ResetPolicyDefinitionReferenceId()
```

##### `ResetResourceCount` <a name="ResetResourceCount" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetResourceCount"></a>

```csharp
private void ResetResourceCount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ManagementGroupPolicyRemediation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagementGroupPolicyRemediation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagementGroupPolicyRemediation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagementGroupPolicyRemediation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ManagementGroupPolicyRemediation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ManagementGroupPolicyRemediation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagementGroupPolicyRemediation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagementGroupPolicyRemediation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ManagementGroupPolicyRemediation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference">ManagementGroupPolicyRemediationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.failurePercentageInput">FailurePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.locationFiltersInput">LocationFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.managementGroupIdInput">ManagementGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.parallelDeploymentsInput">ParallelDeploymentsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyAssignmentIdInput">PolicyAssignmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyDefinitionReferenceIdInput">PolicyDefinitionReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.resourceCountInput">ResourceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.failurePercentage">FailurePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.locationFilters">LocationFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.managementGroupId">ManagementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.parallelDeployments">ParallelDeployments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyDefinitionReferenceId">PolicyDefinitionReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.resourceCount">ResourceCount</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.timeouts"></a>

```csharp
public ManagementGroupPolicyRemediationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference">ManagementGroupPolicyRemediationTimeoutsOutputReference</a>

---

##### `FailurePercentageInput`<sup>Optional</sup> <a name="FailurePercentageInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.failurePercentageInput"></a>

```csharp
public double FailurePercentageInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationFiltersInput`<sup>Optional</sup> <a name="LocationFiltersInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.locationFiltersInput"></a>

```csharp
public string[] LocationFiltersInput { get; }
```

- *Type:* string[]

---

##### `ManagementGroupIdInput`<sup>Optional</sup> <a name="ManagementGroupIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.managementGroupIdInput"></a>

```csharp
public string ManagementGroupIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParallelDeploymentsInput`<sup>Optional</sup> <a name="ParallelDeploymentsInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.parallelDeploymentsInput"></a>

```csharp
public double ParallelDeploymentsInput { get; }
```

- *Type:* double

---

##### `PolicyAssignmentIdInput`<sup>Optional</sup> <a name="PolicyAssignmentIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyAssignmentIdInput"></a>

```csharp
public string PolicyAssignmentIdInput { get; }
```

- *Type:* string

---

##### `PolicyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="PolicyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyDefinitionReferenceIdInput"></a>

```csharp
public string PolicyDefinitionReferenceIdInput { get; }
```

- *Type:* string

---

##### `ResourceCountInput`<sup>Optional</sup> <a name="ResourceCountInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.resourceCountInput"></a>

```csharp
public double ResourceCountInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `FailurePercentage`<sup>Required</sup> <a name="FailurePercentage" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.failurePercentage"></a>

```csharp
public double FailurePercentage { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationFilters`<sup>Required</sup> <a name="LocationFilters" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.locationFilters"></a>

```csharp
public string[] LocationFilters { get; }
```

- *Type:* string[]

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.managementGroupId"></a>

```csharp
public string ManagementGroupId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParallelDeployments`<sup>Required</sup> <a name="ParallelDeployments" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.parallelDeployments"></a>

```csharp
public double ParallelDeployments { get; }
```

- *Type:* double

---

##### `PolicyAssignmentId`<sup>Required</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyAssignmentId"></a>

```csharp
public string PolicyAssignmentId { get; }
```

- *Type:* string

---

##### `PolicyDefinitionReferenceId`<sup>Required</sup> <a name="PolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.policyDefinitionReferenceId"></a>

```csharp
public string PolicyDefinitionReferenceId { get; }
```

- *Type:* string

---

##### `ResourceCount`<sup>Required</sup> <a name="ResourceCount" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.resourceCount"></a>

```csharp
public double ResourceCount { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementGroupPolicyRemediationConfig <a name="ManagementGroupPolicyRemediationConfig" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupPolicyRemediationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagementGroupId,
    string Name,
    string PolicyAssignmentId,
    double FailurePercentage = null,
    string Id = null,
    string[] LocationFilters = null,
    double ParallelDeployments = null,
    string PolicyDefinitionReferenceId = null,
    double ResourceCount = null,
    ManagementGroupPolicyRemediationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.managementGroupId">ManagementGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#management_group_id ManagementGroupPolicyRemediation#management_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#name ManagementGroupPolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#policy_assignment_id ManagementGroupPolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.failurePercentage">FailurePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#failure_percentage ManagementGroupPolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#id ManagementGroupPolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.locationFilters">LocationFilters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#location_filters ManagementGroupPolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.parallelDeployments">ParallelDeployments</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#parallel_deployments ManagementGroupPolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.policyDefinitionReferenceId">PolicyDefinitionReferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#policy_definition_reference_id ManagementGroupPolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.resourceCount">ResourceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#resource_count ManagementGroupPolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts">ManagementGroupPolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagementGroupId`<sup>Required</sup> <a name="ManagementGroupId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.managementGroupId"></a>

```csharp
public string ManagementGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#management_group_id ManagementGroupPolicyRemediation#management_group_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#name ManagementGroupPolicyRemediation#name}.

---

##### `PolicyAssignmentId`<sup>Required</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.policyAssignmentId"></a>

```csharp
public string PolicyAssignmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#policy_assignment_id ManagementGroupPolicyRemediation#policy_assignment_id}.

---

##### `FailurePercentage`<sup>Optional</sup> <a name="FailurePercentage" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.failurePercentage"></a>

```csharp
public double FailurePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#failure_percentage ManagementGroupPolicyRemediation#failure_percentage}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#id ManagementGroupPolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationFilters`<sup>Optional</sup> <a name="LocationFilters" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.locationFilters"></a>

```csharp
public string[] LocationFilters { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#location_filters ManagementGroupPolicyRemediation#location_filters}.

---

##### `ParallelDeployments`<sup>Optional</sup> <a name="ParallelDeployments" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.parallelDeployments"></a>

```csharp
public double ParallelDeployments { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#parallel_deployments ManagementGroupPolicyRemediation#parallel_deployments}.

---

##### `PolicyDefinitionReferenceId`<sup>Optional</sup> <a name="PolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.policyDefinitionReferenceId"></a>

```csharp
public string PolicyDefinitionReferenceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#policy_definition_reference_id ManagementGroupPolicyRemediation#policy_definition_reference_id}.

---

##### `ResourceCount`<sup>Optional</sup> <a name="ResourceCount" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.resourceCount"></a>

```csharp
public double ResourceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#resource_count ManagementGroupPolicyRemediation#resource_count}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationConfig.property.timeouts"></a>

```csharp
public ManagementGroupPolicyRemediationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts">ManagementGroupPolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#timeouts ManagementGroupPolicyRemediation#timeouts}

---

### ManagementGroupPolicyRemediationTimeouts <a name="ManagementGroupPolicyRemediationTimeouts" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupPolicyRemediationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#create ManagementGroupPolicyRemediation#create}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#delete ManagementGroupPolicyRemediation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#read ManagementGroupPolicyRemediation#read}. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#update ManagementGroupPolicyRemediation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#create ManagementGroupPolicyRemediation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#delete ManagementGroupPolicyRemediation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#read ManagementGroupPolicyRemediation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/resources/management_group_policy_remediation#update ManagementGroupPolicyRemediation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementGroupPolicyRemediationTimeoutsOutputReference <a name="ManagementGroupPolicyRemediationTimeoutsOutputReference" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ManagementGroupPolicyRemediationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.managementGroupPolicyRemediation.ManagementGroupPolicyRemediationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



