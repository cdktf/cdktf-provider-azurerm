# `resourcePolicyRemediation` Submodule <a name="`resourcePolicyRemediation` Submodule" id="@cdktf/provider-azurerm.resourcePolicyRemediation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcePolicyRemediation <a name="ResourcePolicyRemediation" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation azurerm_resource_policy_remediation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourcePolicyRemediation(Construct Scope, string Id, ResourcePolicyRemediationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig">ResourcePolicyRemediationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig">ResourcePolicyRemediationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetFailurePercentage">ResetFailurePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetLocationFilters">ResetLocationFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetParallelDeployments">ResetParallelDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetPolicyDefinitionReferenceId">ResetPolicyDefinitionReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetResourceCount">ResetResourceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetResourceDiscoveryMode">ResetResourceDiscoveryMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.putTimeouts"></a>

```csharp
private void PutTimeouts(ResourcePolicyRemediationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a>

---

##### `ResetFailurePercentage` <a name="ResetFailurePercentage" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetFailurePercentage"></a>

```csharp
private void ResetFailurePercentage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocationFilters` <a name="ResetLocationFilters" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetLocationFilters"></a>

```csharp
private void ResetLocationFilters()
```

##### `ResetParallelDeployments` <a name="ResetParallelDeployments" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetParallelDeployments"></a>

```csharp
private void ResetParallelDeployments()
```

##### `ResetPolicyDefinitionReferenceId` <a name="ResetPolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetPolicyDefinitionReferenceId"></a>

```csharp
private void ResetPolicyDefinitionReferenceId()
```

##### `ResetResourceCount` <a name="ResetResourceCount" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetResourceCount"></a>

```csharp
private void ResetResourceCount()
```

##### `ResetResourceDiscoveryMode` <a name="ResetResourceDiscoveryMode" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetResourceDiscoveryMode"></a>

```csharp
private void ResetResourceDiscoveryMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ResourcePolicyRemediation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ResourcePolicyRemediation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ResourcePolicyRemediation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ResourcePolicyRemediation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

ResourcePolicyRemediation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ResourcePolicyRemediation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourcePolicyRemediation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourcePolicyRemediation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ResourcePolicyRemediation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference">ResourcePolicyRemediationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.failurePercentageInput">FailurePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.locationFiltersInput">LocationFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.parallelDeploymentsInput">ParallelDeploymentsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyAssignmentIdInput">PolicyAssignmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionReferenceIdInput">PolicyDefinitionReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceCountInput">ResourceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceDiscoveryModeInput">ResourceDiscoveryModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.failurePercentage">FailurePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.locationFilters">LocationFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.parallelDeployments">ParallelDeployments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionReferenceId">PolicyDefinitionReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceCount">ResourceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceDiscoveryMode">ResourceDiscoveryMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.timeouts"></a>

```csharp
public ResourcePolicyRemediationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference">ResourcePolicyRemediationTimeoutsOutputReference</a>

---

##### `FailurePercentageInput`<sup>Optional</sup> <a name="FailurePercentageInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.failurePercentageInput"></a>

```csharp
public double FailurePercentageInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationFiltersInput`<sup>Optional</sup> <a name="LocationFiltersInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.locationFiltersInput"></a>

```csharp
public string[] LocationFiltersInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParallelDeploymentsInput`<sup>Optional</sup> <a name="ParallelDeploymentsInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.parallelDeploymentsInput"></a>

```csharp
public double ParallelDeploymentsInput { get; }
```

- *Type:* double

---

##### `PolicyAssignmentIdInput`<sup>Optional</sup> <a name="PolicyAssignmentIdInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyAssignmentIdInput"></a>

```csharp
public string PolicyAssignmentIdInput { get; }
```

- *Type:* string

---

##### `PolicyDefinitionReferenceIdInput`<sup>Optional</sup> <a name="PolicyDefinitionReferenceIdInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionReferenceIdInput"></a>

```csharp
public string PolicyDefinitionReferenceIdInput { get; }
```

- *Type:* string

---

##### `ResourceCountInput`<sup>Optional</sup> <a name="ResourceCountInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceCountInput"></a>

```csharp
public double ResourceCountInput { get; }
```

- *Type:* double

---

##### `ResourceDiscoveryModeInput`<sup>Optional</sup> <a name="ResourceDiscoveryModeInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceDiscoveryModeInput"></a>

```csharp
public string ResourceDiscoveryModeInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `FailurePercentage`<sup>Required</sup> <a name="FailurePercentage" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.failurePercentage"></a>

```csharp
public double FailurePercentage { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocationFilters`<sup>Required</sup> <a name="LocationFilters" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.locationFilters"></a>

```csharp
public string[] LocationFilters { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParallelDeployments`<sup>Required</sup> <a name="ParallelDeployments" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.parallelDeployments"></a>

```csharp
public double ParallelDeployments { get; }
```

- *Type:* double

---

##### `PolicyAssignmentId`<sup>Required</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyAssignmentId"></a>

```csharp
public string PolicyAssignmentId { get; }
```

- *Type:* string

---

##### `PolicyDefinitionReferenceId`<sup>Required</sup> <a name="PolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.policyDefinitionReferenceId"></a>

```csharp
public string PolicyDefinitionReferenceId { get; }
```

- *Type:* string

---

##### `ResourceCount`<sup>Required</sup> <a name="ResourceCount" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceCount"></a>

```csharp
public double ResourceCount { get; }
```

- *Type:* double

---

##### `ResourceDiscoveryMode`<sup>Required</sup> <a name="ResourceDiscoveryMode" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceDiscoveryMode"></a>

```csharp
public string ResourceDiscoveryMode { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcePolicyRemediationConfig <a name="ResourcePolicyRemediationConfig" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourcePolicyRemediationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string PolicyAssignmentId,
    string ResourceId,
    double FailurePercentage = null,
    string Id = null,
    string[] LocationFilters = null,
    double ParallelDeployments = null,
    string PolicyDefinitionReferenceId = null,
    double ResourceCount = null,
    string ResourceDiscoveryMode = null,
    ResourcePolicyRemediationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#name ResourcePolicyRemediation#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#policy_assignment_id ResourcePolicyRemediation#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#resource_id ResourcePolicyRemediation#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.failurePercentage">FailurePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#failure_percentage ResourcePolicyRemediation#failure_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#id ResourcePolicyRemediation#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.locationFilters">LocationFilters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#location_filters ResourcePolicyRemediation#location_filters}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.parallelDeployments">ParallelDeployments</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#parallel_deployments ResourcePolicyRemediation#parallel_deployments}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyDefinitionReferenceId">PolicyDefinitionReferenceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#policy_definition_reference_id ResourcePolicyRemediation#policy_definition_reference_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceCount">ResourceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#resource_count ResourcePolicyRemediation#resource_count}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceDiscoveryMode">ResourceDiscoveryMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#resource_discovery_mode ResourcePolicyRemediation#resource_discovery_mode}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#name ResourcePolicyRemediation#name}.

---

##### `PolicyAssignmentId`<sup>Required</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyAssignmentId"></a>

```csharp
public string PolicyAssignmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#policy_assignment_id ResourcePolicyRemediation#policy_assignment_id}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#resource_id ResourcePolicyRemediation#resource_id}.

---

##### `FailurePercentage`<sup>Optional</sup> <a name="FailurePercentage" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.failurePercentage"></a>

```csharp
public double FailurePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#failure_percentage ResourcePolicyRemediation#failure_percentage}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#id ResourcePolicyRemediation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocationFilters`<sup>Optional</sup> <a name="LocationFilters" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.locationFilters"></a>

```csharp
public string[] LocationFilters { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#location_filters ResourcePolicyRemediation#location_filters}.

---

##### `ParallelDeployments`<sup>Optional</sup> <a name="ParallelDeployments" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.parallelDeployments"></a>

```csharp
public double ParallelDeployments { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#parallel_deployments ResourcePolicyRemediation#parallel_deployments}.

---

##### `PolicyDefinitionReferenceId`<sup>Optional</sup> <a name="PolicyDefinitionReferenceId" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.policyDefinitionReferenceId"></a>

```csharp
public string PolicyDefinitionReferenceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#policy_definition_reference_id ResourcePolicyRemediation#policy_definition_reference_id}.

---

##### `ResourceCount`<sup>Optional</sup> <a name="ResourceCount" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceCount"></a>

```csharp
public double ResourceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#resource_count ResourcePolicyRemediation#resource_count}.

---

##### `ResourceDiscoveryMode`<sup>Optional</sup> <a name="ResourceDiscoveryMode" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.resourceDiscoveryMode"></a>

```csharp
public string ResourceDiscoveryMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#resource_discovery_mode ResourcePolicyRemediation#resource_discovery_mode}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationConfig.property.timeouts"></a>

```csharp
public ResourcePolicyRemediationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts">ResourcePolicyRemediationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#timeouts ResourcePolicyRemediation#timeouts}

---

### ResourcePolicyRemediationTimeouts <a name="ResourcePolicyRemediationTimeouts" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourcePolicyRemediationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#create ResourcePolicyRemediation#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#delete ResourcePolicyRemediation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#read ResourcePolicyRemediation#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#update ResourcePolicyRemediation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#create ResourcePolicyRemediation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#delete ResourcePolicyRemediation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#read ResourcePolicyRemediation#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.45.1/docs/resources/resource_policy_remediation#update ResourcePolicyRemediation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcePolicyRemediationTimeoutsOutputReference <a name="ResourcePolicyRemediationTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new ResourcePolicyRemediationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.resourcePolicyRemediation.ResourcePolicyRemediationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



