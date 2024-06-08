# `subnetServiceEndpointStoragePolicy` Submodule <a name="`subnetServiceEndpointStoragePolicy` Submodule" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubnetServiceEndpointStoragePolicy <a name="SubnetServiceEndpointStoragePolicy" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy azurerm_subnet_service_endpoint_storage_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetServiceEndpointStoragePolicy(Construct Scope, string Id, SubnetServiceEndpointStoragePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig">SubnetServiceEndpointStoragePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig">SubnetServiceEndpointStoragePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putDefinition">PutDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetDefinition">ResetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefinition` <a name="PutDefinition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putDefinition"></a>

```csharp
private void PutDefinition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putDefinition.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(SubnetServiceEndpointStoragePolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a>

---

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetDefinition"></a>

```csharp
private void ResetDefinition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SubnetServiceEndpointStoragePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SubnetServiceEndpointStoragePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SubnetServiceEndpointStoragePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SubnetServiceEndpointStoragePolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SubnetServiceEndpointStoragePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SubnetServiceEndpointStoragePolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SubnetServiceEndpointStoragePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SubnetServiceEndpointStoragePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SubnetServiceEndpointStoragePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definition">Definition</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList">SubnetServiceEndpointStoragePolicyDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference">SubnetServiceEndpointStoragePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definitionInput">DefinitionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definition"></a>

```csharp
public SubnetServiceEndpointStoragePolicyDefinitionList Definition { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList">SubnetServiceEndpointStoragePolicyDefinitionList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeouts"></a>

```csharp
public SubnetServiceEndpointStoragePolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference">SubnetServiceEndpointStoragePolicyTimeoutsOutputReference</a>

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definitionInput"></a>

```csharp
public object DefinitionInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SubnetServiceEndpointStoragePolicyConfig <a name="SubnetServiceEndpointStoragePolicyConfig" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetServiceEndpointStoragePolicyConfig {
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
    object Definition = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SubnetServiceEndpointStoragePolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#location SubnetServiceEndpointStoragePolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#resource_group_name SubnetServiceEndpointStoragePolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.definition">Definition</a></code> | <code>object</code> | definition block. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#id SubnetServiceEndpointStoragePolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#tags SubnetServiceEndpointStoragePolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#location SubnetServiceEndpointStoragePolicy#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#resource_group_name SubnetServiceEndpointStoragePolicy#resource_group_name}.

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.definition"></a>

```csharp
public object Definition { get; set; }
```

- *Type:* object

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#definition SubnetServiceEndpointStoragePolicy#definition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#id SubnetServiceEndpointStoragePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#tags SubnetServiceEndpointStoragePolicy#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.timeouts"></a>

```csharp
public SubnetServiceEndpointStoragePolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#timeouts SubnetServiceEndpointStoragePolicy#timeouts}

---

### SubnetServiceEndpointStoragePolicyDefinition <a name="SubnetServiceEndpointStoragePolicyDefinition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetServiceEndpointStoragePolicyDefinition {
    string Name,
    string[] ServiceResources,
    string Description = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.serviceResources">ServiceResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#service_resources SubnetServiceEndpointStoragePolicy#service_resources}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#description SubnetServiceEndpointStoragePolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.service">Service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#service SubnetServiceEndpointStoragePolicy#service}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}.

---

##### `ServiceResources`<sup>Required</sup> <a name="ServiceResources" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.serviceResources"></a>

```csharp
public string[] ServiceResources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#service_resources SubnetServiceEndpointStoragePolicy#service_resources}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#description SubnetServiceEndpointStoragePolicy#description}.

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#service SubnetServiceEndpointStoragePolicy#service}.

---

### SubnetServiceEndpointStoragePolicyTimeouts <a name="SubnetServiceEndpointStoragePolicyTimeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetServiceEndpointStoragePolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#create SubnetServiceEndpointStoragePolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#delete SubnetServiceEndpointStoragePolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#read SubnetServiceEndpointStoragePolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#update SubnetServiceEndpointStoragePolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#create SubnetServiceEndpointStoragePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#delete SubnetServiceEndpointStoragePolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#read SubnetServiceEndpointStoragePolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/subnet_service_endpoint_storage_policy#update SubnetServiceEndpointStoragePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubnetServiceEndpointStoragePolicyDefinitionList <a name="SubnetServiceEndpointStoragePolicyDefinitionList" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetServiceEndpointStoragePolicyDefinitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.get"></a>

```csharp
private SubnetServiceEndpointStoragePolicyDefinitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SubnetServiceEndpointStoragePolicyDefinitionOutputReference <a name="SubnetServiceEndpointStoragePolicyDefinitionOutputReference" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetServiceEndpointStoragePolicyDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResourcesInput">ServiceResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResources">ServiceResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `ServiceResourcesInput`<sup>Optional</sup> <a name="ServiceResourcesInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResourcesInput"></a>

```csharp
public string[] ServiceResourcesInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ServiceResources`<sup>Required</sup> <a name="ServiceResources" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResources"></a>

```csharp
public string[] ServiceResources { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SubnetServiceEndpointStoragePolicyTimeoutsOutputReference <a name="SubnetServiceEndpointStoragePolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetServiceEndpointStoragePolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



