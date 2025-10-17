# `networkFunctionCollectorPolicy` Submodule <a name="`networkFunctionCollectorPolicy` Submodule" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFunctionCollectorPolicy <a name="NetworkFunctionCollectorPolicy" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy azurerm_network_function_collector_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkFunctionCollectorPolicy(Construct Scope, string Id, NetworkFunctionCollectorPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig">NetworkFunctionCollectorPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig">NetworkFunctionCollectorPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxEmission">PutIpfxEmission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxIngestion">PutIpfxIngestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpfxEmission` <a name="PutIpfxEmission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxEmission"></a>

```csharp
private void PutIpfxEmission(NetworkFunctionCollectorPolicyIpfxEmission Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxEmission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

---

##### `PutIpfxIngestion` <a name="PutIpfxIngestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxIngestion"></a>

```csharp
private void PutIpfxIngestion(NetworkFunctionCollectorPolicyIpfxIngestion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putIpfxIngestion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkFunctionCollectorPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkFunctionCollectorPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkFunctionCollectorPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkFunctionCollectorPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkFunctionCollectorPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

NetworkFunctionCollectorPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkFunctionCollectorPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkFunctionCollectorPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkFunctionCollectorPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFunctionCollectorPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmission">IpfxEmission</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference">NetworkFunctionCollectorPolicyIpfxEmissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestion">IpfxIngestion</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference">NetworkFunctionCollectorPolicyIpfxIngestionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference">NetworkFunctionCollectorPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmissionInput">IpfxEmissionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestionInput">IpfxIngestionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorIdInput">TrafficCollectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorId">TrafficCollectorId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `IpfxEmission`<sup>Required</sup> <a name="IpfxEmission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmission"></a>

```csharp
public NetworkFunctionCollectorPolicyIpfxEmissionOutputReference IpfxEmission { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference">NetworkFunctionCollectorPolicyIpfxEmissionOutputReference</a>

---

##### `IpfxIngestion`<sup>Required</sup> <a name="IpfxIngestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestion"></a>

```csharp
public NetworkFunctionCollectorPolicyIpfxIngestionOutputReference IpfxIngestion { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference">NetworkFunctionCollectorPolicyIpfxIngestionOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeouts"></a>

```csharp
public NetworkFunctionCollectorPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference">NetworkFunctionCollectorPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpfxEmissionInput`<sup>Optional</sup> <a name="IpfxEmissionInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxEmissionInput"></a>

```csharp
public NetworkFunctionCollectorPolicyIpfxEmission IpfxEmissionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

---

##### `IpfxIngestionInput`<sup>Optional</sup> <a name="IpfxIngestionInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.ipfxIngestionInput"></a>

```csharp
public NetworkFunctionCollectorPolicyIpfxIngestion IpfxIngestionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|NetworkFunctionCollectorPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>

---

##### `TrafficCollectorIdInput`<sup>Optional</sup> <a name="TrafficCollectorIdInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorIdInput"></a>

```csharp
public string TrafficCollectorIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TrafficCollectorId`<sup>Required</sup> <a name="TrafficCollectorId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.trafficCollectorId"></a>

```csharp
public string TrafficCollectorId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFunctionCollectorPolicyConfig <a name="NetworkFunctionCollectorPolicyConfig" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkFunctionCollectorPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    NetworkFunctionCollectorPolicyIpfxEmission IpfxEmission,
    NetworkFunctionCollectorPolicyIpfxIngestion IpfxIngestion,
    string Location,
    string Name,
    string TrafficCollectorId,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    NetworkFunctionCollectorPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxEmission">IpfxEmission</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a></code> | ipfx_emission block. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxIngestion">IpfxIngestion</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a></code> | ipfx_ingestion block. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#location NetworkFunctionCollectorPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#name NetworkFunctionCollectorPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.trafficCollectorId">TrafficCollectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#traffic_collector_id NetworkFunctionCollectorPolicy#traffic_collector_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#id NetworkFunctionCollectorPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#tags NetworkFunctionCollectorPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `IpfxEmission`<sup>Required</sup> <a name="IpfxEmission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxEmission"></a>

```csharp
public NetworkFunctionCollectorPolicyIpfxEmission IpfxEmission { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

ipfx_emission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#ipfx_emission NetworkFunctionCollectorPolicy#ipfx_emission}

---

##### `IpfxIngestion`<sup>Required</sup> <a name="IpfxIngestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.ipfxIngestion"></a>

```csharp
public NetworkFunctionCollectorPolicyIpfxIngestion IpfxIngestion { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

ipfx_ingestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#ipfx_ingestion NetworkFunctionCollectorPolicy#ipfx_ingestion}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#location NetworkFunctionCollectorPolicy#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#name NetworkFunctionCollectorPolicy#name}.

---

##### `TrafficCollectorId`<sup>Required</sup> <a name="TrafficCollectorId" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.trafficCollectorId"></a>

```csharp
public string TrafficCollectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#traffic_collector_id NetworkFunctionCollectorPolicy#traffic_collector_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#id NetworkFunctionCollectorPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#tags NetworkFunctionCollectorPolicy#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyConfig.property.timeouts"></a>

```csharp
public NetworkFunctionCollectorPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#timeouts NetworkFunctionCollectorPolicy#timeouts}

---

### NetworkFunctionCollectorPolicyIpfxEmission <a name="NetworkFunctionCollectorPolicyIpfxEmission" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkFunctionCollectorPolicyIpfxEmission {
    string[] DestinationTypes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission.property.destinationTypes">DestinationTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#destination_types NetworkFunctionCollectorPolicy#destination_types}. |

---

##### `DestinationTypes`<sup>Required</sup> <a name="DestinationTypes" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission.property.destinationTypes"></a>

```csharp
public string[] DestinationTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#destination_types NetworkFunctionCollectorPolicy#destination_types}.

---

### NetworkFunctionCollectorPolicyIpfxIngestion <a name="NetworkFunctionCollectorPolicyIpfxIngestion" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkFunctionCollectorPolicyIpfxIngestion {
    string[] SourceResourceIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion.property.sourceResourceIds">SourceResourceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#source_resource_ids NetworkFunctionCollectorPolicy#source_resource_ids}. |

---

##### `SourceResourceIds`<sup>Required</sup> <a name="SourceResourceIds" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion.property.sourceResourceIds"></a>

```csharp
public string[] SourceResourceIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#source_resource_ids NetworkFunctionCollectorPolicy#source_resource_ids}.

---

### NetworkFunctionCollectorPolicyTimeouts <a name="NetworkFunctionCollectorPolicyTimeouts" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkFunctionCollectorPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#create NetworkFunctionCollectorPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#delete NetworkFunctionCollectorPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#read NetworkFunctionCollectorPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#update NetworkFunctionCollectorPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#create NetworkFunctionCollectorPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#delete NetworkFunctionCollectorPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#read NetworkFunctionCollectorPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/network_function_collector_policy#update NetworkFunctionCollectorPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFunctionCollectorPolicyIpfxEmissionOutputReference <a name="NetworkFunctionCollectorPolicyIpfxEmissionOutputReference" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkFunctionCollectorPolicyIpfxEmissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypesInput">DestinationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypes">DestinationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationTypesInput`<sup>Optional</sup> <a name="DestinationTypesInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypesInput"></a>

```csharp
public string[] DestinationTypesInput { get; }
```

- *Type:* string[]

---

##### `DestinationTypes`<sup>Required</sup> <a name="DestinationTypes" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.destinationTypes"></a>

```csharp
public string[] DestinationTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmissionOutputReference.property.internalValue"></a>

```csharp
public NetworkFunctionCollectorPolicyIpfxEmission InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxEmission">NetworkFunctionCollectorPolicyIpfxEmission</a>

---


### NetworkFunctionCollectorPolicyIpfxIngestionOutputReference <a name="NetworkFunctionCollectorPolicyIpfxIngestionOutputReference" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkFunctionCollectorPolicyIpfxIngestionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIdsInput">SourceResourceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIds">SourceResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceResourceIdsInput`<sup>Optional</sup> <a name="SourceResourceIdsInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIdsInput"></a>

```csharp
public string[] SourceResourceIdsInput { get; }
```

- *Type:* string[]

---

##### `SourceResourceIds`<sup>Required</sup> <a name="SourceResourceIds" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.sourceResourceIds"></a>

```csharp
public string[] SourceResourceIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestionOutputReference.property.internalValue"></a>

```csharp
public NetworkFunctionCollectorPolicyIpfxIngestion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyIpfxIngestion">NetworkFunctionCollectorPolicyIpfxIngestion</a>

---


### NetworkFunctionCollectorPolicyTimeoutsOutputReference <a name="NetworkFunctionCollectorPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new NetworkFunctionCollectorPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkFunctionCollectorPolicyTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.networkFunctionCollectorPolicy.NetworkFunctionCollectorPolicyTimeouts">NetworkFunctionCollectorPolicyTimeouts</a>

---



