# `kubernetesClusterTrustedAccessRoleBinding` Submodule <a name="`kubernetesClusterTrustedAccessRoleBinding` Submodule" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesClusterTrustedAccessRoleBinding <a name="KubernetesClusterTrustedAccessRoleBinding" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding azurerm_kubernetes_cluster_trusted_access_role_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterTrustedAccessRoleBinding(Construct Scope, string Id, KubernetesClusterTrustedAccessRoleBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig">KubernetesClusterTrustedAccessRoleBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig">KubernetesClusterTrustedAccessRoleBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(KubernetesClusterTrustedAccessRoleBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts">KubernetesClusterTrustedAccessRoleBindingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesClusterTrustedAccessRoleBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesClusterTrustedAccessRoleBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesClusterTrustedAccessRoleBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesClusterTrustedAccessRoleBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesClusterTrustedAccessRoleBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KubernetesClusterTrustedAccessRoleBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesClusterTrustedAccessRoleBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesClusterTrustedAccessRoleBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesClusterTrustedAccessRoleBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference">KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.kubernetesClusterIdInput">KubernetesClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.sourceResourceIdInput">SourceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts">KubernetesClusterTrustedAccessRoleBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.kubernetesClusterId">KubernetesClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.sourceResourceId">SourceResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.timeouts"></a>

```csharp
public KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference">KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KubernetesClusterIdInput`<sup>Optional</sup> <a name="KubernetesClusterIdInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.kubernetesClusterIdInput"></a>

```csharp
public string KubernetesClusterIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `SourceResourceIdInput`<sup>Optional</sup> <a name="SourceResourceIdInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.sourceResourceIdInput"></a>

```csharp
public string SourceResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.timeoutsInput"></a>

```csharp
public IResolvable|KubernetesClusterTrustedAccessRoleBindingTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts">KubernetesClusterTrustedAccessRoleBindingTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KubernetesClusterId`<sup>Required</sup> <a name="KubernetesClusterId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.kubernetesClusterId"></a>

```csharp
public string KubernetesClusterId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.sourceResourceId"></a>

```csharp
public string SourceResourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterTrustedAccessRoleBindingConfig <a name="KubernetesClusterTrustedAccessRoleBindingConfig" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterTrustedAccessRoleBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string KubernetesClusterId,
    string Name,
    string[] Roles,
    string SourceResourceId,
    string Id = null,
    KubernetesClusterTrustedAccessRoleBindingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.kubernetesClusterId">KubernetesClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#kubernetes_cluster_id KubernetesClusterTrustedAccessRoleBinding#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#name KubernetesClusterTrustedAccessRoleBinding#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.roles">Roles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#roles KubernetesClusterTrustedAccessRoleBinding#roles}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.sourceResourceId">SourceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#source_resource_id KubernetesClusterTrustedAccessRoleBinding#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#id KubernetesClusterTrustedAccessRoleBinding#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts">KubernetesClusterTrustedAccessRoleBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `KubernetesClusterId`<sup>Required</sup> <a name="KubernetesClusterId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.kubernetesClusterId"></a>

```csharp
public string KubernetesClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#kubernetes_cluster_id KubernetesClusterTrustedAccessRoleBinding#kubernetes_cluster_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#name KubernetesClusterTrustedAccessRoleBinding#name}.

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#roles KubernetesClusterTrustedAccessRoleBinding#roles}.

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.sourceResourceId"></a>

```csharp
public string SourceResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#source_resource_id KubernetesClusterTrustedAccessRoleBinding#source_resource_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#id KubernetesClusterTrustedAccessRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.timeouts"></a>

```csharp
public KubernetesClusterTrustedAccessRoleBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts">KubernetesClusterTrustedAccessRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#timeouts KubernetesClusterTrustedAccessRoleBinding#timeouts}

---

### KubernetesClusterTrustedAccessRoleBindingTimeouts <a name="KubernetesClusterTrustedAccessRoleBindingTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterTrustedAccessRoleBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#create KubernetesClusterTrustedAccessRoleBinding#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#delete KubernetesClusterTrustedAccessRoleBinding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#read KubernetesClusterTrustedAccessRoleBinding#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#update KubernetesClusterTrustedAccessRoleBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#create KubernetesClusterTrustedAccessRoleBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#delete KubernetesClusterTrustedAccessRoleBinding#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#read KubernetesClusterTrustedAccessRoleBinding#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#update KubernetesClusterTrustedAccessRoleBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference <a name="KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts">KubernetesClusterTrustedAccessRoleBindingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|KubernetesClusterTrustedAccessRoleBindingTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts">KubernetesClusterTrustedAccessRoleBindingTimeouts</a>

---



