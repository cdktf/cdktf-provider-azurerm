# `subnet` Submodule <a name="`subnet` Submodule" id="@cdktf/provider-azurerm.subnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Subnet <a name="Subnet" id="@cdktf/provider-azurerm.subnet.Subnet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet azurerm_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnet.Subnet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new Subnet(Construct Scope, string Id, SubnetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig">SubnetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.subnet.Subnet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subnet.Subnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.subnet.Subnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetConfig">SubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.putDelegation">PutDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetDefaultOutboundAccessEnabled">ResetDefaultOutboundAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetDelegation">ResetDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetEnforcePrivateLinkEndpointNetworkPolicies">ResetEnforcePrivateLinkEndpointNetworkPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetEnforcePrivateLinkServiceNetworkPolicies">ResetEnforcePrivateLinkServiceNetworkPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetPrivateEndpointNetworkPolicies">ResetPrivateEndpointNetworkPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetPrivateEndpointNetworkPoliciesEnabled">ResetPrivateEndpointNetworkPoliciesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetPrivateLinkServiceNetworkPoliciesEnabled">ResetPrivateLinkServiceNetworkPoliciesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetServiceEndpointPolicyIds">ResetServiceEndpointPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetServiceEndpoints">ResetServiceEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnet.Subnet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.subnet.Subnet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.subnet.Subnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subnet.Subnet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.subnet.Subnet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.subnet.Subnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.subnet.Subnet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.subnet.Subnet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.subnet.Subnet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.subnet.Subnet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.subnet.Subnet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.subnet.Subnet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.subnet.Subnet.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.subnet.Subnet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subnet.Subnet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subnet.Subnet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.Subnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.subnet.Subnet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subnet.Subnet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.subnet.Subnet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.subnet.Subnet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.subnet.Subnet.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.subnet.Subnet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subnet.Subnet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDelegation` <a name="PutDelegation" id="@cdktf/provider-azurerm.subnet.Subnet.putDelegation"></a>

```csharp
private void PutDelegation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subnet.Subnet.putDelegation.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.subnet.Subnet.putTimeouts"></a>

```csharp
private void PutTimeouts(SubnetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subnet.Subnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a>

---

##### `ResetDefaultOutboundAccessEnabled` <a name="ResetDefaultOutboundAccessEnabled" id="@cdktf/provider-azurerm.subnet.Subnet.resetDefaultOutboundAccessEnabled"></a>

```csharp
private void ResetDefaultOutboundAccessEnabled()
```

##### `ResetDelegation` <a name="ResetDelegation" id="@cdktf/provider-azurerm.subnet.Subnet.resetDelegation"></a>

```csharp
private void ResetDelegation()
```

##### `ResetEnforcePrivateLinkEndpointNetworkPolicies` <a name="ResetEnforcePrivateLinkEndpointNetworkPolicies" id="@cdktf/provider-azurerm.subnet.Subnet.resetEnforcePrivateLinkEndpointNetworkPolicies"></a>

```csharp
private void ResetEnforcePrivateLinkEndpointNetworkPolicies()
```

##### `ResetEnforcePrivateLinkServiceNetworkPolicies` <a name="ResetEnforcePrivateLinkServiceNetworkPolicies" id="@cdktf/provider-azurerm.subnet.Subnet.resetEnforcePrivateLinkServiceNetworkPolicies"></a>

```csharp
private void ResetEnforcePrivateLinkServiceNetworkPolicies()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.subnet.Subnet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrivateEndpointNetworkPolicies` <a name="ResetPrivateEndpointNetworkPolicies" id="@cdktf/provider-azurerm.subnet.Subnet.resetPrivateEndpointNetworkPolicies"></a>

```csharp
private void ResetPrivateEndpointNetworkPolicies()
```

##### `ResetPrivateEndpointNetworkPoliciesEnabled` <a name="ResetPrivateEndpointNetworkPoliciesEnabled" id="@cdktf/provider-azurerm.subnet.Subnet.resetPrivateEndpointNetworkPoliciesEnabled"></a>

```csharp
private void ResetPrivateEndpointNetworkPoliciesEnabled()
```

##### `ResetPrivateLinkServiceNetworkPoliciesEnabled` <a name="ResetPrivateLinkServiceNetworkPoliciesEnabled" id="@cdktf/provider-azurerm.subnet.Subnet.resetPrivateLinkServiceNetworkPoliciesEnabled"></a>

```csharp
private void ResetPrivateLinkServiceNetworkPoliciesEnabled()
```

##### `ResetServiceEndpointPolicyIds` <a name="ResetServiceEndpointPolicyIds" id="@cdktf/provider-azurerm.subnet.Subnet.resetServiceEndpointPolicyIds"></a>

```csharp
private void ResetServiceEndpointPolicyIds()
```

##### `ResetServiceEndpoints` <a name="ResetServiceEndpoints" id="@cdktf/provider-azurerm.subnet.Subnet.resetServiceEndpoints"></a>

```csharp
private void ResetServiceEndpoints()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.subnet.Subnet.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.subnet.Subnet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

Subnet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.subnet.Subnet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.subnet.Subnet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

Subnet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.subnet.Subnet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.subnet.Subnet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

Subnet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.subnet.Subnet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.subnet.Subnet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

Subnet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.subnet.Subnet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.subnet.Subnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Subnet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.subnet.Subnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Subnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subnet.Subnet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Subnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.delegation">Delegation</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList">SubnetDelegationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference">SubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.addressPrefixesInput">AddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.defaultOutboundAccessEnabledInput">DefaultOutboundAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.delegationInput">DelegationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkEndpointNetworkPoliciesInput">EnforcePrivateLinkEndpointNetworkPoliciesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkServiceNetworkPoliciesInput">EnforcePrivateLinkServiceNetworkPoliciesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPoliciesEnabledInput">PrivateEndpointNetworkPoliciesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPoliciesInput">PrivateEndpointNetworkPoliciesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.privateLinkServiceNetworkPoliciesEnabledInput">PrivateLinkServiceNetworkPoliciesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpointPolicyIdsInput">ServiceEndpointPolicyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpointsInput">ServiceEndpointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.virtualNetworkNameInput">VirtualNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.addressPrefixes">AddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.defaultOutboundAccessEnabled">DefaultOutboundAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkEndpointNetworkPolicies">EnforcePrivateLinkEndpointNetworkPolicies</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkServiceNetworkPolicies">EnforcePrivateLinkServiceNetworkPolicies</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPolicies">PrivateEndpointNetworkPolicies</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPoliciesEnabled">PrivateEndpointNetworkPoliciesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.privateLinkServiceNetworkPoliciesEnabled">PrivateLinkServiceNetworkPoliciesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpointPolicyIds">ServiceEndpointPolicyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpoints">ServiceEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.subnet.Subnet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.subnet.Subnet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnet.Subnet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.subnet.Subnet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.subnet.Subnet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.subnet.Subnet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.subnet.Subnet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subnet.Subnet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subnet.Subnet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subnet.Subnet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subnet.Subnet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subnet.Subnet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subnet.Subnet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subnet.Subnet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Delegation`<sup>Required</sup> <a name="Delegation" id="@cdktf/provider-azurerm.subnet.Subnet.property.delegation"></a>

```csharp
public SubnetDelegationList Delegation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList">SubnetDelegationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subnet.Subnet.property.timeouts"></a>

```csharp
public SubnetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference">SubnetTimeoutsOutputReference</a>

---

##### `AddressPrefixesInput`<sup>Optional</sup> <a name="AddressPrefixesInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.addressPrefixesInput"></a>

```csharp
public string[] AddressPrefixesInput { get; }
```

- *Type:* string[]

---

##### `DefaultOutboundAccessEnabledInput`<sup>Optional</sup> <a name="DefaultOutboundAccessEnabledInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.defaultOutboundAccessEnabledInput"></a>

```csharp
public object DefaultOutboundAccessEnabledInput { get; }
```

- *Type:* object

---

##### `DelegationInput`<sup>Optional</sup> <a name="DelegationInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.delegationInput"></a>

```csharp
public object DelegationInput { get; }
```

- *Type:* object

---

##### `EnforcePrivateLinkEndpointNetworkPoliciesInput`<sup>Optional</sup> <a name="EnforcePrivateLinkEndpointNetworkPoliciesInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkEndpointNetworkPoliciesInput"></a>

```csharp
public object EnforcePrivateLinkEndpointNetworkPoliciesInput { get; }
```

- *Type:* object

---

##### `EnforcePrivateLinkServiceNetworkPoliciesInput`<sup>Optional</sup> <a name="EnforcePrivateLinkServiceNetworkPoliciesInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkServiceNetworkPoliciesInput"></a>

```csharp
public object EnforcePrivateLinkServiceNetworkPoliciesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointNetworkPoliciesEnabledInput`<sup>Optional</sup> <a name="PrivateEndpointNetworkPoliciesEnabledInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPoliciesEnabledInput"></a>

```csharp
public object PrivateEndpointNetworkPoliciesEnabledInput { get; }
```

- *Type:* object

---

##### `PrivateEndpointNetworkPoliciesInput`<sup>Optional</sup> <a name="PrivateEndpointNetworkPoliciesInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPoliciesInput"></a>

```csharp
public string PrivateEndpointNetworkPoliciesInput { get; }
```

- *Type:* string

---

##### `PrivateLinkServiceNetworkPoliciesEnabledInput`<sup>Optional</sup> <a name="PrivateLinkServiceNetworkPoliciesEnabledInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.privateLinkServiceNetworkPoliciesEnabledInput"></a>

```csharp
public object PrivateLinkServiceNetworkPoliciesEnabledInput { get; }
```

- *Type:* object

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ServiceEndpointPolicyIdsInput`<sup>Optional</sup> <a name="ServiceEndpointPolicyIdsInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpointPolicyIdsInput"></a>

```csharp
public string[] ServiceEndpointPolicyIdsInput { get; }
```

- *Type:* string[]

---

##### `ServiceEndpointsInput`<sup>Optional</sup> <a name="ServiceEndpointsInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpointsInput"></a>

```csharp
public string[] ServiceEndpointsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualNetworkNameInput`<sup>Optional</sup> <a name="VirtualNetworkNameInput" id="@cdktf/provider-azurerm.subnet.Subnet.property.virtualNetworkNameInput"></a>

```csharp
public string VirtualNetworkNameInput { get; }
```

- *Type:* string

---

##### `AddressPrefixes`<sup>Required</sup> <a name="AddressPrefixes" id="@cdktf/provider-azurerm.subnet.Subnet.property.addressPrefixes"></a>

```csharp
public string[] AddressPrefixes { get; }
```

- *Type:* string[]

---

##### `DefaultOutboundAccessEnabled`<sup>Required</sup> <a name="DefaultOutboundAccessEnabled" id="@cdktf/provider-azurerm.subnet.Subnet.property.defaultOutboundAccessEnabled"></a>

```csharp
public object DefaultOutboundAccessEnabled { get; }
```

- *Type:* object

---

##### `EnforcePrivateLinkEndpointNetworkPolicies`<sup>Required</sup> <a name="EnforcePrivateLinkEndpointNetworkPolicies" id="@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkEndpointNetworkPolicies"></a>

```csharp
public object EnforcePrivateLinkEndpointNetworkPolicies { get; }
```

- *Type:* object

---

##### `EnforcePrivateLinkServiceNetworkPolicies`<sup>Required</sup> <a name="EnforcePrivateLinkServiceNetworkPolicies" id="@cdktf/provider-azurerm.subnet.Subnet.property.enforcePrivateLinkServiceNetworkPolicies"></a>

```csharp
public object EnforcePrivateLinkServiceNetworkPolicies { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subnet.Subnet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subnet.Subnet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateEndpointNetworkPolicies`<sup>Required</sup> <a name="PrivateEndpointNetworkPolicies" id="@cdktf/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPolicies"></a>

```csharp
public string PrivateEndpointNetworkPolicies { get; }
```

- *Type:* string

---

##### `PrivateEndpointNetworkPoliciesEnabled`<sup>Required</sup> <a name="PrivateEndpointNetworkPoliciesEnabled" id="@cdktf/provider-azurerm.subnet.Subnet.property.privateEndpointNetworkPoliciesEnabled"></a>

```csharp
public object PrivateEndpointNetworkPoliciesEnabled { get; }
```

- *Type:* object

---

##### `PrivateLinkServiceNetworkPoliciesEnabled`<sup>Required</sup> <a name="PrivateLinkServiceNetworkPoliciesEnabled" id="@cdktf/provider-azurerm.subnet.Subnet.property.privateLinkServiceNetworkPoliciesEnabled"></a>

```csharp
public object PrivateLinkServiceNetworkPoliciesEnabled { get; }
```

- *Type:* object

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.subnet.Subnet.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ServiceEndpointPolicyIds`<sup>Required</sup> <a name="ServiceEndpointPolicyIds" id="@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpointPolicyIds"></a>

```csharp
public string[] ServiceEndpointPolicyIds { get; }
```

- *Type:* string[]

---

##### `ServiceEndpoints`<sup>Required</sup> <a name="ServiceEndpoints" id="@cdktf/provider-azurerm.subnet.Subnet.property.serviceEndpoints"></a>

```csharp
public string[] ServiceEndpoints { get; }
```

- *Type:* string[]

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-azurerm.subnet.Subnet.property.virtualNetworkName"></a>

```csharp
public string VirtualNetworkName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.Subnet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.subnet.Subnet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SubnetConfig <a name="SubnetConfig" id="@cdktf/provider-azurerm.subnet.SubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnet.SubnetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AddressPrefixes,
    string Name,
    string ResourceGroupName,
    string VirtualNetworkName,
    object DefaultOutboundAccessEnabled = null,
    object Delegation = null,
    object EnforcePrivateLinkEndpointNetworkPolicies = null,
    object EnforcePrivateLinkServiceNetworkPolicies = null,
    string Id = null,
    string PrivateEndpointNetworkPolicies = null,
    object PrivateEndpointNetworkPoliciesEnabled = null,
    object PrivateLinkServiceNetworkPoliciesEnabled = null,
    string[] ServiceEndpointPolicyIds = null,
    string[] ServiceEndpoints = null,
    SubnetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.addressPrefixes">AddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#name Subnet#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.virtualNetworkName">VirtualNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.defaultOutboundAccessEnabled">DefaultOutboundAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.delegation">Delegation</a></code> | <code>object</code> | delegation block. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.enforcePrivateLinkEndpointNetworkPolicies">EnforcePrivateLinkEndpointNetworkPolicies</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#enforce_private_link_endpoint_network_policies Subnet#enforce_private_link_endpoint_network_policies}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.enforcePrivateLinkServiceNetworkPolicies">EnforcePrivateLinkServiceNetworkPolicies</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#enforce_private_link_service_network_policies Subnet#enforce_private_link_service_network_policies}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#id Subnet#id}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.privateEndpointNetworkPolicies">PrivateEndpointNetworkPolicies</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.privateEndpointNetworkPoliciesEnabled">PrivateEndpointNetworkPoliciesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#private_endpoint_network_policies_enabled Subnet#private_endpoint_network_policies_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.privateLinkServiceNetworkPoliciesEnabled">PrivateLinkServiceNetworkPoliciesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.serviceEndpointPolicyIds">ServiceEndpointPolicyIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.serviceEndpoints">ServiceEndpoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#service_endpoints Subnet#service_endpoints}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AddressPrefixes`<sup>Required</sup> <a name="AddressPrefixes" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.addressPrefixes"></a>

```csharp
public string[] AddressPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#address_prefixes Subnet#address_prefixes}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#name Subnet#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#resource_group_name Subnet#resource_group_name}.

---

##### `VirtualNetworkName`<sup>Required</sup> <a name="VirtualNetworkName" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.virtualNetworkName"></a>

```csharp
public string VirtualNetworkName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#virtual_network_name Subnet#virtual_network_name}.

---

##### `DefaultOutboundAccessEnabled`<sup>Optional</sup> <a name="DefaultOutboundAccessEnabled" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.defaultOutboundAccessEnabled"></a>

```csharp
public object DefaultOutboundAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#default_outbound_access_enabled Subnet#default_outbound_access_enabled}.

---

##### `Delegation`<sup>Optional</sup> <a name="Delegation" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.delegation"></a>

```csharp
public object Delegation { get; set; }
```

- *Type:* object

delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#delegation Subnet#delegation}

---

##### `EnforcePrivateLinkEndpointNetworkPolicies`<sup>Optional</sup> <a name="EnforcePrivateLinkEndpointNetworkPolicies" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.enforcePrivateLinkEndpointNetworkPolicies"></a>

```csharp
public object EnforcePrivateLinkEndpointNetworkPolicies { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#enforce_private_link_endpoint_network_policies Subnet#enforce_private_link_endpoint_network_policies}.

---

##### `EnforcePrivateLinkServiceNetworkPolicies`<sup>Optional</sup> <a name="EnforcePrivateLinkServiceNetworkPolicies" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.enforcePrivateLinkServiceNetworkPolicies"></a>

```csharp
public object EnforcePrivateLinkServiceNetworkPolicies { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#enforce_private_link_service_network_policies Subnet#enforce_private_link_service_network_policies}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#id Subnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateEndpointNetworkPolicies`<sup>Optional</sup> <a name="PrivateEndpointNetworkPolicies" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.privateEndpointNetworkPolicies"></a>

```csharp
public string PrivateEndpointNetworkPolicies { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#private_endpoint_network_policies Subnet#private_endpoint_network_policies}.

---

##### `PrivateEndpointNetworkPoliciesEnabled`<sup>Optional</sup> <a name="PrivateEndpointNetworkPoliciesEnabled" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.privateEndpointNetworkPoliciesEnabled"></a>

```csharp
public object PrivateEndpointNetworkPoliciesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#private_endpoint_network_policies_enabled Subnet#private_endpoint_network_policies_enabled}.

---

##### `PrivateLinkServiceNetworkPoliciesEnabled`<sup>Optional</sup> <a name="PrivateLinkServiceNetworkPoliciesEnabled" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.privateLinkServiceNetworkPoliciesEnabled"></a>

```csharp
public object PrivateLinkServiceNetworkPoliciesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#private_link_service_network_policies_enabled Subnet#private_link_service_network_policies_enabled}.

---

##### `ServiceEndpointPolicyIds`<sup>Optional</sup> <a name="ServiceEndpointPolicyIds" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.serviceEndpointPolicyIds"></a>

```csharp
public string[] ServiceEndpointPolicyIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#service_endpoint_policy_ids Subnet#service_endpoint_policy_ids}.

---

##### `ServiceEndpoints`<sup>Optional</sup> <a name="ServiceEndpoints" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.serviceEndpoints"></a>

```csharp
public string[] ServiceEndpoints { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#service_endpoints Subnet#service_endpoints}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subnet.SubnetConfig.property.timeouts"></a>

```csharp
public SubnetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts">SubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#timeouts Subnet#timeouts}

---

### SubnetDelegation <a name="SubnetDelegation" id="@cdktf/provider-azurerm.subnet.SubnetDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnet.SubnetDelegation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetDelegation {
    string Name,
    SubnetDelegationServiceDelegation ServiceDelegation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegation.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#name Subnet#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegation.property.serviceDelegation">ServiceDelegation</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a></code> | service_delegation block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subnet.SubnetDelegation.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#name Subnet#name}.

---

##### `ServiceDelegation`<sup>Required</sup> <a name="ServiceDelegation" id="@cdktf/provider-azurerm.subnet.SubnetDelegation.property.serviceDelegation"></a>

```csharp
public SubnetDelegationServiceDelegation ServiceDelegation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a>

service_delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#service_delegation Subnet#service_delegation}

---

### SubnetDelegationServiceDelegation <a name="SubnetDelegationServiceDelegation" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetDelegationServiceDelegation {
    string Name,
    string[] Actions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#name Subnet#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation.property.actions">Actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#actions Subnet#actions}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#name Subnet#name}.

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#actions Subnet#actions}.

---

### SubnetTimeouts <a name="SubnetTimeouts" id="@cdktf/provider-azurerm.subnet.SubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnet.SubnetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#create Subnet#create}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#delete Subnet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#read Subnet#read}. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#update Subnet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#create Subnet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#delete Subnet#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#read Subnet#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.subnet.SubnetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/subnet#update Subnet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubnetDelegationList <a name="SubnetDelegationList" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetDelegationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.get"></a>

```csharp
private SubnetDelegationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subnet.SubnetDelegationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SubnetDelegationOutputReference <a name="SubnetDelegationOutputReference" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetDelegationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.putServiceDelegation">PutServiceDelegation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceDelegation` <a name="PutServiceDelegation" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.putServiceDelegation"></a>

```csharp
private void PutServiceDelegation(SubnetDelegationServiceDelegation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.putServiceDelegation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.serviceDelegation">ServiceDelegation</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference">SubnetDelegationServiceDelegationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.serviceDelegationInput">ServiceDelegationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceDelegation`<sup>Required</sup> <a name="ServiceDelegation" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.serviceDelegation"></a>

```csharp
public SubnetDelegationServiceDelegationOutputReference ServiceDelegation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference">SubnetDelegationServiceDelegationOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServiceDelegationInput`<sup>Optional</sup> <a name="ServiceDelegationInput" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.serviceDelegationInput"></a>

```csharp
public SubnetDelegationServiceDelegation ServiceDelegationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subnet.SubnetDelegationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SubnetDelegationServiceDelegationOutputReference <a name="SubnetDelegationServiceDelegationOutputReference" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetDelegationServiceDelegationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resetActions">ResetActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.resetActions"></a>

```csharp
private void ResetActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegationOutputReference.property.internalValue"></a>

```csharp
public SubnetDelegationServiceDelegation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnet.SubnetDelegationServiceDelegation">SubnetDelegationServiceDelegation</a>

---


### SubnetTimeoutsOutputReference <a name="SubnetTimeoutsOutputReference" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubnetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subnet.SubnetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



