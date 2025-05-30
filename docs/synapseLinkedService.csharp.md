# `synapseLinkedService` Submodule <a name="`synapseLinkedService` Submodule" id="@cdktf/provider-azurerm.synapseLinkedService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SynapseLinkedService <a name="SynapseLinkedService" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service azurerm_synapse_linked_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseLinkedService(Construct Scope, string Id, SynapseLinkedServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig">SynapseLinkedServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig">SynapseLinkedServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putIntegrationRuntime">PutIntegrationRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetIntegrationRuntime">ResetIntegrationRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIntegrationRuntime` <a name="PutIntegrationRuntime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putIntegrationRuntime"></a>

```csharp
private void PutIntegrationRuntime(SynapseLinkedServiceIntegrationRuntime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putIntegrationRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putTimeouts"></a>

```csharp
private void PutTimeouts(SynapseLinkedServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIntegrationRuntime` <a name="ResetIntegrationRuntime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetIntegrationRuntime"></a>

```csharp
private void ResetIntegrationRuntime()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SynapseLinkedService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseLinkedService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseLinkedService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseLinkedService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SynapseLinkedService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SynapseLinkedService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SynapseLinkedService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SynapseLinkedService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SynapseLinkedService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.integrationRuntime">IntegrationRuntime</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference">SynapseLinkedServiceIntegrationRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference">SynapseLinkedServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.annotationsInput">AnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.integrationRuntimeInput">IntegrationRuntimeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.synapseWorkspaceIdInput">SynapseWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typePropertiesJsonInput">TypePropertiesJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typePropertiesJson">TypePropertiesJson</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IntegrationRuntime`<sup>Required</sup> <a name="IntegrationRuntime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.integrationRuntime"></a>

```csharp
public SynapseLinkedServiceIntegrationRuntimeOutputReference IntegrationRuntime { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference">SynapseLinkedServiceIntegrationRuntimeOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.timeouts"></a>

```csharp
public SynapseLinkedServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference">SynapseLinkedServiceTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.additionalPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.annotationsInput"></a>

```csharp
public string[] AnnotationsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationRuntimeInput`<sup>Optional</sup> <a name="IntegrationRuntimeInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.integrationRuntimeInput"></a>

```csharp
public SynapseLinkedServiceIntegrationRuntime IntegrationRuntimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SynapseWorkspaceIdInput`<sup>Optional</sup> <a name="SynapseWorkspaceIdInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.synapseWorkspaceIdInput"></a>

```csharp
public string SynapseWorkspaceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `TypePropertiesJsonInput`<sup>Optional</sup> <a name="TypePropertiesJsonInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typePropertiesJsonInput"></a>

```csharp
public string TypePropertiesJsonInput { get; }
```

- *Type:* string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.synapseWorkspaceId"></a>

```csharp
public string SynapseWorkspaceId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `TypePropertiesJson`<sup>Required</sup> <a name="TypePropertiesJson" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.typePropertiesJson"></a>

```csharp
public string TypePropertiesJson { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SynapseLinkedServiceConfig <a name="SynapseLinkedServiceConfig" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseLinkedServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string SynapseWorkspaceId,
    string Type,
    string TypePropertiesJson,
    System.Collections.Generic.IDictionary<string, string> AdditionalProperties = null,
    string[] Annotations = null,
    string Description = null,
    string Id = null,
    SynapseLinkedServiceIntegrationRuntime IntegrationRuntime = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    SynapseLinkedServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#name SynapseLinkedService#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.synapseWorkspaceId">SynapseWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#synapse_workspace_id SynapseLinkedService#synapse_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#type SynapseLinkedService#type}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.typePropertiesJson">TypePropertiesJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#type_properties_json SynapseLinkedService#type_properties_json}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#additional_properties SynapseLinkedService#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.annotations">Annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#annotations SynapseLinkedService#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#description SynapseLinkedService#description}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#id SynapseLinkedService#id}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.integrationRuntime">IntegrationRuntime</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a></code> | integration_runtime block. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#name SynapseLinkedService#name}.

---

##### `SynapseWorkspaceId`<sup>Required</sup> <a name="SynapseWorkspaceId" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.synapseWorkspaceId"></a>

```csharp
public string SynapseWorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#synapse_workspace_id SynapseLinkedService#synapse_workspace_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#type SynapseLinkedService#type}.

---

##### `TypePropertiesJson`<sup>Required</sup> <a name="TypePropertiesJson" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.typePropertiesJson"></a>

```csharp
public string TypePropertiesJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#type_properties_json SynapseLinkedService#type_properties_json}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#additional_properties SynapseLinkedService#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.annotations"></a>

```csharp
public string[] Annotations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#annotations SynapseLinkedService#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#description SynapseLinkedService#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#id SynapseLinkedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationRuntime`<sup>Optional</sup> <a name="IntegrationRuntime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.integrationRuntime"></a>

```csharp
public SynapseLinkedServiceIntegrationRuntime IntegrationRuntime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a>

integration_runtime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#integration_runtime SynapseLinkedService#integration_runtime}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceConfig.property.timeouts"></a>

```csharp
public SynapseLinkedServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts">SynapseLinkedServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#timeouts SynapseLinkedService#timeouts}

---

### SynapseLinkedServiceIntegrationRuntime <a name="SynapseLinkedServiceIntegrationRuntime" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseLinkedServiceIntegrationRuntime {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#name SynapseLinkedService#name}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#name SynapseLinkedService#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#parameters SynapseLinkedService#parameters}.

---

### SynapseLinkedServiceTimeouts <a name="SynapseLinkedServiceTimeouts" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseLinkedServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#create SynapseLinkedService#create}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#delete SynapseLinkedService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#read SynapseLinkedService#read}. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#update SynapseLinkedService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#create SynapseLinkedService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#delete SynapseLinkedService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#read SynapseLinkedService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/synapse_linked_service#update SynapseLinkedService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SynapseLinkedServiceIntegrationRuntimeOutputReference <a name="SynapseLinkedServiceIntegrationRuntimeOutputReference" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseLinkedServiceIntegrationRuntimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntimeOutputReference.property.internalValue"></a>

```csharp
public SynapseLinkedServiceIntegrationRuntime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceIntegrationRuntime">SynapseLinkedServiceIntegrationRuntime</a>

---


### SynapseLinkedServiceTimeoutsOutputReference <a name="SynapseLinkedServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SynapseLinkedServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.synapseLinkedService.SynapseLinkedServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



