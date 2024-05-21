# `vmwarePrivateCloud` Submodule <a name="`vmwarePrivateCloud` Submodule" id="@cdktf/provider-azurerm.vmwarePrivateCloud"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwarePrivateCloud <a name="VmwarePrivateCloud" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud azurerm_vmware_private_cloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VmwarePrivateCloud(Construct Scope, string Id, VmwarePrivateCloudConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig">VmwarePrivateCloudConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig">VmwarePrivateCloudConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putManagementCluster">PutManagementCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetInternetConnectionEnabled">ResetInternetConnectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetNsxtPassword">ResetNsxtPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetVcenterPassword">ResetVcenterPassword</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManagementCluster` <a name="PutManagementCluster" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putManagementCluster"></a>

```csharp
private void PutManagementCluster(VmwarePrivateCloudManagementCluster Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putManagementCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts"></a>

```csharp
private void PutTimeouts(VmwarePrivateCloudTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInternetConnectionEnabled` <a name="ResetInternetConnectionEnabled" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetInternetConnectionEnabled"></a>

```csharp
private void ResetInternetConnectionEnabled()
```

##### `ResetNsxtPassword` <a name="ResetNsxtPassword" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetNsxtPassword"></a>

```csharp
private void ResetNsxtPassword()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVcenterPassword` <a name="ResetVcenterPassword" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.resetVcenterPassword"></a>

```csharp
private void ResetVcenterPassword()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VmwarePrivateCloud resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VmwarePrivateCloud.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VmwarePrivateCloud.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VmwarePrivateCloud.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VmwarePrivateCloud.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VmwarePrivateCloud resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VmwarePrivateCloud to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VmwarePrivateCloud that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VmwarePrivateCloud to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.circuit">Circuit</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList">VmwarePrivateCloudCircuitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.hcxCloudManagerEndpoint">HcxCloudManagerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementCluster">ManagementCluster</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference">VmwarePrivateCloudManagementClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementSubnetCidr">ManagementSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtCertificateThumbprint">NsxtCertificateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtManagerEndpoint">NsxtManagerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioningSubnetCidr">ProvisioningSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference">VmwarePrivateCloudTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterCertificateThumbprint">VcenterCertificateThumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcsaEndpoint">VcsaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vmotionSubnetCidr">VmotionSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabledInput">InternetConnectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementClusterInput">ManagementClusterInput</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidrInput">NetworkSubnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPasswordInput">NsxtPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuNameInput">SkuNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPasswordInput">VcenterPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabled">InternetConnectionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidr">NetworkSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPassword">NsxtPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuName">SkuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPassword">VcenterPassword</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Circuit`<sup>Required</sup> <a name="Circuit" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.circuit"></a>

```csharp
public VmwarePrivateCloudCircuitList Circuit { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList">VmwarePrivateCloudCircuitList</a>

---

##### `HcxCloudManagerEndpoint`<sup>Required</sup> <a name="HcxCloudManagerEndpoint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.hcxCloudManagerEndpoint"></a>

```csharp
public string HcxCloudManagerEndpoint { get; }
```

- *Type:* string

---

##### `ManagementCluster`<sup>Required</sup> <a name="ManagementCluster" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementCluster"></a>

```csharp
public VmwarePrivateCloudManagementClusterOutputReference ManagementCluster { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference">VmwarePrivateCloudManagementClusterOutputReference</a>

---

##### `ManagementSubnetCidr`<sup>Required</sup> <a name="ManagementSubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementSubnetCidr"></a>

```csharp
public string ManagementSubnetCidr { get; }
```

- *Type:* string

---

##### `NsxtCertificateThumbprint`<sup>Required</sup> <a name="NsxtCertificateThumbprint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtCertificateThumbprint"></a>

```csharp
public string NsxtCertificateThumbprint { get; }
```

- *Type:* string

---

##### `NsxtManagerEndpoint`<sup>Required</sup> <a name="NsxtManagerEndpoint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtManagerEndpoint"></a>

```csharp
public string NsxtManagerEndpoint { get; }
```

- *Type:* string

---

##### `ProvisioningSubnetCidr`<sup>Required</sup> <a name="ProvisioningSubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.provisioningSubnetCidr"></a>

```csharp
public string ProvisioningSubnetCidr { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeouts"></a>

```csharp
public VmwarePrivateCloudTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference">VmwarePrivateCloudTimeoutsOutputReference</a>

---

##### `VcenterCertificateThumbprint`<sup>Required</sup> <a name="VcenterCertificateThumbprint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterCertificateThumbprint"></a>

```csharp
public string VcenterCertificateThumbprint { get; }
```

- *Type:* string

---

##### `VcsaEndpoint`<sup>Required</sup> <a name="VcsaEndpoint" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcsaEndpoint"></a>

```csharp
public string VcsaEndpoint { get; }
```

- *Type:* string

---

##### `VmotionSubnetCidr`<sup>Required</sup> <a name="VmotionSubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vmotionSubnetCidr"></a>

```csharp
public string VmotionSubnetCidr { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InternetConnectionEnabledInput`<sup>Optional</sup> <a name="InternetConnectionEnabledInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabledInput"></a>

```csharp
public object InternetConnectionEnabledInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagementClusterInput`<sup>Optional</sup> <a name="ManagementClusterInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.managementClusterInput"></a>

```csharp
public VmwarePrivateCloudManagementCluster ManagementClusterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkSubnetCidrInput`<sup>Optional</sup> <a name="NetworkSubnetCidrInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidrInput"></a>

```csharp
public string NetworkSubnetCidrInput { get; }
```

- *Type:* string

---

##### `NsxtPasswordInput`<sup>Optional</sup> <a name="NsxtPasswordInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPasswordInput"></a>

```csharp
public string NsxtPasswordInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SkuNameInput`<sup>Optional</sup> <a name="SkuNameInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuNameInput"></a>

```csharp
public string SkuNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VcenterPasswordInput`<sup>Optional</sup> <a name="VcenterPasswordInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPasswordInput"></a>

```csharp
public string VcenterPasswordInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternetConnectionEnabled`<sup>Required</sup> <a name="InternetConnectionEnabled" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.internetConnectionEnabled"></a>

```csharp
public object InternetConnectionEnabled { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkSubnetCidr`<sup>Required</sup> <a name="NetworkSubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.networkSubnetCidr"></a>

```csharp
public string NetworkSubnetCidr { get; }
```

- *Type:* string

---

##### `NsxtPassword`<sup>Required</sup> <a name="NsxtPassword" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.nsxtPassword"></a>

```csharp
public string NsxtPassword { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.skuName"></a>

```csharp
public string SkuName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VcenterPassword`<sup>Required</sup> <a name="VcenterPassword" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.vcenterPassword"></a>

```csharp
public string VcenterPassword { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloud.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VmwarePrivateCloudCircuit <a name="VmwarePrivateCloudCircuit" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VmwarePrivateCloudCircuit {

};
```


### VmwarePrivateCloudConfig <a name="VmwarePrivateCloudConfig" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VmwarePrivateCloudConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    VmwarePrivateCloudManagementCluster ManagementCluster,
    string Name,
    string NetworkSubnetCidr,
    string ResourceGroupName,
    string SkuName,
    string Id = null,
    object InternetConnectionEnabled = null,
    string NsxtPassword = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    VmwarePrivateCloudTimeouts Timeouts = null,
    string VcenterPassword = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#location VmwarePrivateCloud#location}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.managementCluster">ManagementCluster</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a></code> | management_cluster block. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#name VmwarePrivateCloud#name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.networkSubnetCidr">NetworkSubnetCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#network_subnet_cidr VmwarePrivateCloud#network_subnet_cidr}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#resource_group_name VmwarePrivateCloud#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.skuName">SkuName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#sku_name VmwarePrivateCloud#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#id VmwarePrivateCloud#id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.internetConnectionEnabled">InternetConnectionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#internet_connection_enabled VmwarePrivateCloud#internet_connection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.nsxtPassword">NsxtPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#nsxt_password VmwarePrivateCloud#nsxt_password}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#tags VmwarePrivateCloud#tags}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.vcenterPassword">VcenterPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#vcenter_password VmwarePrivateCloud#vcenter_password}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#location VmwarePrivateCloud#location}.

---

##### `ManagementCluster`<sup>Required</sup> <a name="ManagementCluster" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.managementCluster"></a>

```csharp
public VmwarePrivateCloudManagementCluster ManagementCluster { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

management_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#management_cluster VmwarePrivateCloud#management_cluster}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#name VmwarePrivateCloud#name}.

---

##### `NetworkSubnetCidr`<sup>Required</sup> <a name="NetworkSubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.networkSubnetCidr"></a>

```csharp
public string NetworkSubnetCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#network_subnet_cidr VmwarePrivateCloud#network_subnet_cidr}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#resource_group_name VmwarePrivateCloud#resource_group_name}.

---

##### `SkuName`<sup>Required</sup> <a name="SkuName" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.skuName"></a>

```csharp
public string SkuName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#sku_name VmwarePrivateCloud#sku_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#id VmwarePrivateCloud#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternetConnectionEnabled`<sup>Optional</sup> <a name="InternetConnectionEnabled" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.internetConnectionEnabled"></a>

```csharp
public object InternetConnectionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#internet_connection_enabled VmwarePrivateCloud#internet_connection_enabled}.

---

##### `NsxtPassword`<sup>Optional</sup> <a name="NsxtPassword" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.nsxtPassword"></a>

```csharp
public string NsxtPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#nsxt_password VmwarePrivateCloud#nsxt_password}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#tags VmwarePrivateCloud#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.timeouts"></a>

```csharp
public VmwarePrivateCloudTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts">VmwarePrivateCloudTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#timeouts VmwarePrivateCloud#timeouts}

---

##### `VcenterPassword`<sup>Optional</sup> <a name="VcenterPassword" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudConfig.property.vcenterPassword"></a>

```csharp
public string VcenterPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#vcenter_password VmwarePrivateCloud#vcenter_password}.

---

### VmwarePrivateCloudManagementCluster <a name="VmwarePrivateCloudManagementCluster" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VmwarePrivateCloudManagementCluster {
    double Size
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#size VmwarePrivateCloud#size}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#size VmwarePrivateCloud#size}.

---

### VmwarePrivateCloudTimeouts <a name="VmwarePrivateCloudTimeouts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VmwarePrivateCloudTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#create VmwarePrivateCloud#create}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#delete VmwarePrivateCloud#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#read VmwarePrivateCloud#read}. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#update VmwarePrivateCloud#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#create VmwarePrivateCloud#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#delete VmwarePrivateCloud#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#read VmwarePrivateCloud#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/resources/vmware_private_cloud#update VmwarePrivateCloud#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwarePrivateCloudCircuitList <a name="VmwarePrivateCloudCircuitList" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VmwarePrivateCloudCircuitList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.get"></a>

```csharp
private VmwarePrivateCloudCircuitOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VmwarePrivateCloudCircuitOutputReference <a name="VmwarePrivateCloudCircuitOutputReference" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VmwarePrivateCloudCircuitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRouteId">ExpressRouteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRoutePrivatePeeringId">ExpressRoutePrivatePeeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.primarySubnetCidr">PrimarySubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.secondarySubnetCidr">SecondarySubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit">VmwarePrivateCloudCircuit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressRouteId`<sup>Required</sup> <a name="ExpressRouteId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRouteId"></a>

```csharp
public string ExpressRouteId { get; }
```

- *Type:* string

---

##### `ExpressRoutePrivatePeeringId`<sup>Required</sup> <a name="ExpressRoutePrivatePeeringId" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.expressRoutePrivatePeeringId"></a>

```csharp
public string ExpressRoutePrivatePeeringId { get; }
```

- *Type:* string

---

##### `PrimarySubnetCidr`<sup>Required</sup> <a name="PrimarySubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.primarySubnetCidr"></a>

```csharp
public string PrimarySubnetCidr { get; }
```

- *Type:* string

---

##### `SecondarySubnetCidr`<sup>Required</sup> <a name="SecondarySubnetCidr" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.secondarySubnetCidr"></a>

```csharp
public string SecondarySubnetCidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuitOutputReference.property.internalValue"></a>

```csharp
public VmwarePrivateCloudCircuit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudCircuit">VmwarePrivateCloudCircuit</a>

---


### VmwarePrivateCloudManagementClusterOutputReference <a name="VmwarePrivateCloudManagementClusterOutputReference" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VmwarePrivateCloudManagementClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.hosts">Hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.hosts"></a>

```csharp
public string[] Hosts { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementClusterOutputReference.property.internalValue"></a>

```csharp
public VmwarePrivateCloudManagementCluster InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudManagementCluster">VmwarePrivateCloudManagementCluster</a>

---


### VmwarePrivateCloudTimeoutsOutputReference <a name="VmwarePrivateCloudTimeoutsOutputReference" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VmwarePrivateCloudTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.vmwarePrivateCloud.VmwarePrivateCloudTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



