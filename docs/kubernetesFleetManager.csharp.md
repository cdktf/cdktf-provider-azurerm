# `azurerm_kubernetes_fleet_manager`

Refer to the Terraform Registory for docs: [`azurerm_kubernetes_fleet_manager`](https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager).

# `kubernetesFleetManager` Submodule <a name="`kubernetesFleetManager` Submodule" id="@cdktf/provider-azurerm.kubernetesFleetManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesFleetManager <a name="KubernetesFleetManager" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager azurerm_kubernetes_fleet_manager}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetManager(Construct Scope, string Id, KubernetesFleetManagerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig">KubernetesFleetManagerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig">KubernetesFleetManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.putHubProfile">PutHubProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetHubProfile">ResetHubProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutHubProfile` <a name="PutHubProfile" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.putHubProfile"></a>

```csharp
private void PutHubProfile(KubernetesFleetManagerHubProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.putHubProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile">KubernetesFleetManagerHubProfile</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.putTimeouts"></a>

```csharp
private void PutTimeouts(KubernetesFleetManagerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts">KubernetesFleetManagerTimeouts</a>

---

##### `ResetHubProfile` <a name="ResetHubProfile" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetHubProfile"></a>

```csharp
private void ResetHubProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesFleetManager.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesFleetManager.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesFleetManager.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.hubProfile">HubProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference">KubernetesFleetManagerHubProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference">KubernetesFleetManagerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.hubProfileInput">HubProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile">KubernetesFleetManagerHubProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `HubProfile`<sup>Required</sup> <a name="HubProfile" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.hubProfile"></a>

```csharp
public KubernetesFleetManagerHubProfileOutputReference HubProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference">KubernetesFleetManagerHubProfileOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.timeouts"></a>

```csharp
public KubernetesFleetManagerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference">KubernetesFleetManagerTimeoutsOutputReference</a>

---

##### `HubProfileInput`<sup>Optional</sup> <a name="HubProfileInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.hubProfileInput"></a>

```csharp
public KubernetesFleetManagerHubProfile HubProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile">KubernetesFleetManagerHubProfile</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManager.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesFleetManagerConfig <a name="KubernetesFleetManagerConfig" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetManagerConfig {
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
    KubernetesFleetManagerHubProfile HubProfile = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    KubernetesFleetManagerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#location KubernetesFleetManager#location}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#name KubernetesFleetManager#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#resource_group_name KubernetesFleetManager#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.hubProfile">HubProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile">KubernetesFleetManagerHubProfile</a></code> | hub_profile block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#id KubernetesFleetManager#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#tags KubernetesFleetManager#tags}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts">KubernetesFleetManagerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#location KubernetesFleetManager#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#name KubernetesFleetManager#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#resource_group_name KubernetesFleetManager#resource_group_name}.

---

##### `HubProfile`<sup>Optional</sup> <a name="HubProfile" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.hubProfile"></a>

```csharp
public KubernetesFleetManagerHubProfile HubProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile">KubernetesFleetManagerHubProfile</a>

hub_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#hub_profile KubernetesFleetManager#hub_profile}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#id KubernetesFleetManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#tags KubernetesFleetManager#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerConfig.property.timeouts"></a>

```csharp
public KubernetesFleetManagerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts">KubernetesFleetManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#timeouts KubernetesFleetManager#timeouts}

---

### KubernetesFleetManagerHubProfile <a name="KubernetesFleetManagerHubProfile" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetManagerHubProfile {
    string DnsPrefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile.property.dnsPrefix">DnsPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#dns_prefix KubernetesFleetManager#dns_prefix}. |

---

##### `DnsPrefix`<sup>Required</sup> <a name="DnsPrefix" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile.property.dnsPrefix"></a>

```csharp
public string DnsPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#dns_prefix KubernetesFleetManager#dns_prefix}.

---

### KubernetesFleetManagerTimeouts <a name="KubernetesFleetManagerTimeouts" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetManagerTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#create KubernetesFleetManager#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#delete KubernetesFleetManager#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#read KubernetesFleetManager#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#update KubernetesFleetManager#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#create KubernetesFleetManager#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#delete KubernetesFleetManager#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#read KubernetesFleetManager#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_fleet_manager#update KubernetesFleetManager#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesFleetManagerHubProfileOutputReference <a name="KubernetesFleetManagerHubProfileOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetManagerHubProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.kubernetesVersion">KubernetesVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.dnsPrefixInput">DnsPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.dnsPrefix">DnsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile">KubernetesFleetManagerHubProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.kubernetesVersion"></a>

```csharp
public string KubernetesVersion { get; }
```

- *Type:* string

---

##### `DnsPrefixInput`<sup>Optional</sup> <a name="DnsPrefixInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.dnsPrefixInput"></a>

```csharp
public string DnsPrefixInput { get; }
```

- *Type:* string

---

##### `DnsPrefix`<sup>Required</sup> <a name="DnsPrefix" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.dnsPrefix"></a>

```csharp
public string DnsPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfileOutputReference.property.internalValue"></a>

```csharp
public KubernetesFleetManagerHubProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerHubProfile">KubernetesFleetManagerHubProfile</a>

---


### KubernetesFleetManagerTimeoutsOutputReference <a name="KubernetesFleetManagerTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFleetManagerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFleetManager.KubernetesFleetManagerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



