# `azurerm_kubernetes_flux_configuration`

Refer to the Terraform Registory for docs: [`azurerm_kubernetes_flux_configuration`](https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration).

# `kubernetesFluxConfiguration` Submodule <a name="`kubernetesFluxConfiguration` Submodule" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesFluxConfiguration <a name="KubernetesFluxConfiguration" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration azurerm_kubernetes_flux_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfiguration(Construct Scope, string Id, KubernetesFluxConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig">KubernetesFluxConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig">KubernetesFluxConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBlobStorage">PutBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBucket">PutBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putGitRepository">PutGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putKustomizations">PutKustomizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBlobStorage">ResetBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetContinuousReconciliationEnabled">ResetContinuousReconciliationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetGitRepository">ResetGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutBlobStorage` <a name="PutBlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBlobStorage"></a>

```csharp
private void PutBlobStorage(KubernetesFluxConfigurationBlobStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBlobStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

---

##### `PutBucket` <a name="PutBucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBucket"></a>

```csharp
private void PutBucket(KubernetesFluxConfigurationBucket Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putBucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

---

##### `PutGitRepository` <a name="PutGitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putGitRepository"></a>

```csharp
private void PutGitRepository(KubernetesFluxConfigurationGitRepository Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putGitRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

---

##### `PutKustomizations` <a name="PutKustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putKustomizations"></a>

```csharp
private void PutKustomizations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putKustomizations.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(KubernetesFluxConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a>

---

##### `ResetBlobStorage` <a name="ResetBlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBlobStorage"></a>

```csharp
private void ResetBlobStorage()
```

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetContinuousReconciliationEnabled` <a name="ResetContinuousReconciliationEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetContinuousReconciliationEnabled"></a>

```csharp
private void ResetContinuousReconciliationEnabled()
```

##### `ResetGitRepository` <a name="ResetGitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetGitRepository"></a>

```csharp
private void ResetGitRepository()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesFluxConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesFluxConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KubernetesFluxConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorage">BlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference">KubernetesFluxConfigurationBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucket">Bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference">KubernetesFluxConfigurationBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepository">GitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference">KubernetesFluxConfigurationGitRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizations">Kustomizations</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList">KubernetesFluxConfigurationKustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference">KubernetesFluxConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorageInput">BlobStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucketInput">BucketInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabledInput">ContinuousReconciliationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepositoryInput">GitRepositoryInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizationsInput">KustomizationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabled">ContinuousReconciliationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BlobStorage`<sup>Required</sup> <a name="BlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorage"></a>

```csharp
public KubernetesFluxConfigurationBlobStorageOutputReference BlobStorage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference">KubernetesFluxConfigurationBlobStorageOutputReference</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucket"></a>

```csharp
public KubernetesFluxConfigurationBucketOutputReference Bucket { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference">KubernetesFluxConfigurationBucketOutputReference</a>

---

##### `GitRepository`<sup>Required</sup> <a name="GitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepository"></a>

```csharp
public KubernetesFluxConfigurationGitRepositoryOutputReference GitRepository { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference">KubernetesFluxConfigurationGitRepositoryOutputReference</a>

---

##### `Kustomizations`<sup>Required</sup> <a name="Kustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizations"></a>

```csharp
public KubernetesFluxConfigurationKustomizationsList Kustomizations { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList">KubernetesFluxConfigurationKustomizationsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeouts"></a>

```csharp
public KubernetesFluxConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference">KubernetesFluxConfigurationTimeoutsOutputReference</a>

---

##### `BlobStorageInput`<sup>Optional</sup> <a name="BlobStorageInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.blobStorageInput"></a>

```csharp
public KubernetesFluxConfigurationBlobStorage BlobStorageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.bucketInput"></a>

```csharp
public KubernetesFluxConfigurationBucket BucketInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ContinuousReconciliationEnabledInput`<sup>Optional</sup> <a name="ContinuousReconciliationEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabledInput"></a>

```csharp
public object ContinuousReconciliationEnabledInput { get; }
```

- *Type:* object

---

##### `GitRepositoryInput`<sup>Optional</sup> <a name="GitRepositoryInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.gitRepositoryInput"></a>

```csharp
public KubernetesFluxConfigurationGitRepository GitRepositoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KustomizationsInput`<sup>Optional</sup> <a name="KustomizationsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.kustomizationsInput"></a>

```csharp
public object KustomizationsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ContinuousReconciliationEnabled`<sup>Required</sup> <a name="ContinuousReconciliationEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.continuousReconciliationEnabled"></a>

```csharp
public object ContinuousReconciliationEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesFluxConfigurationBlobStorage <a name="KubernetesFluxConfigurationBlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationBlobStorage {
    string ContainerId,
    string AccountKey = null,
    string LocalAuthReference = null,
    KubernetesFluxConfigurationBlobStorageManagedIdentity ManagedIdentity = null,
    string SasToken = null,
    KubernetesFluxConfigurationBlobStorageServicePrincipal ServicePrincipal = null,
    double SyncIntervalInSeconds = null,
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.containerId">ContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#container_id KubernetesFluxConfiguration#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.accountKey">AccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#account_key KubernetesFluxConfiguration#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.localAuthReference">LocalAuthReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.managedIdentity">ManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a></code> | managed_identity block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.sasToken">SasToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#sas_token KubernetesFluxConfiguration#sas_token}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.servicePrincipal">ServicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | service_principal block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.containerId"></a>

```csharp
public string ContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#container_id KubernetesFluxConfiguration#container_id}.

---

##### `AccountKey`<sup>Optional</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.accountKey"></a>

```csharp
public string AccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#account_key KubernetesFluxConfiguration#account_key}.

---

##### `LocalAuthReference`<sup>Optional</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.localAuthReference"></a>

```csharp
public string LocalAuthReference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}.

---

##### `ManagedIdentity`<sup>Optional</sup> <a name="ManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.managedIdentity"></a>

```csharp
public KubernetesFluxConfigurationBlobStorageManagedIdentity ManagedIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#managed_identity KubernetesFluxConfiguration#managed_identity}

---

##### `SasToken`<sup>Optional</sup> <a name="SasToken" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.sasToken"></a>

```csharp
public string SasToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#sas_token KubernetesFluxConfiguration#sas_token}.

---

##### `ServicePrincipal`<sup>Optional</sup> <a name="ServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.servicePrincipal"></a>

```csharp
public KubernetesFluxConfigurationBlobStorageServicePrincipal ServicePrincipal { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#service_principal KubernetesFluxConfiguration#service_principal}

---

##### `SyncIntervalInSeconds`<sup>Optional</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

### KubernetesFluxConfigurationBlobStorageManagedIdentity <a name="KubernetesFluxConfigurationBlobStorageManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationBlobStorageManagedIdentity {
    string ClientId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}.

---

### KubernetesFluxConfigurationBlobStorageServicePrincipal <a name="KubernetesFluxConfigurationBlobStorageServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationBlobStorageServicePrincipal {
    string ClientId,
    string TenantId,
    string ClientCertificateBase64 = null,
    string ClientCertificatePassword = null,
    object ClientCertificateSendChain = null,
    string ClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#tenant_id KubernetesFluxConfiguration#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64">ClientCertificateBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#client_certificate_base64 KubernetesFluxConfiguration#client_certificate_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#client_certificate_password KubernetesFluxConfiguration#client_certificate_password}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain">ClientCertificateSendChain</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#client_certificate_send_chain KubernetesFluxConfiguration#client_certificate_send_chain}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#client_secret KubernetesFluxConfiguration#client_secret}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#client_id KubernetesFluxConfiguration#client_id}.

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#tenant_id KubernetesFluxConfiguration#tenant_id}.

---

##### `ClientCertificateBase64`<sup>Optional</sup> <a name="ClientCertificateBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateBase64"></a>

```csharp
public string ClientCertificateBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#client_certificate_base64 KubernetesFluxConfiguration#client_certificate_base64}.

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificatePassword"></a>

```csharp
public string ClientCertificatePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#client_certificate_password KubernetesFluxConfiguration#client_certificate_password}.

---

##### `ClientCertificateSendChain`<sup>Optional</sup> <a name="ClientCertificateSendChain" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientCertificateSendChain"></a>

```csharp
public object ClientCertificateSendChain { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#client_certificate_send_chain KubernetesFluxConfiguration#client_certificate_send_chain}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#client_secret KubernetesFluxConfiguration#client_secret}.

---

### KubernetesFluxConfigurationBucket <a name="KubernetesFluxConfigurationBucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationBucket {
    string BucketName,
    string Url,
    string AccessKey = null,
    string LocalAuthReference = null,
    string SecretKeyBase64 = null,
    double SyncIntervalInSeconds = null,
    double TimeoutInSeconds = null,
    object TlsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#bucket_name KubernetesFluxConfiguration#bucket_name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.accessKey">AccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#access_key KubernetesFluxConfiguration#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.localAuthReference">LocalAuthReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.secretKeyBase64">SecretKeyBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#secret_key_base64 KubernetesFluxConfiguration#secret_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.tlsEnabled">TlsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#tls_enabled KubernetesFluxConfiguration#tls_enabled}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#bucket_name KubernetesFluxConfiguration#bucket_name}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}.

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#access_key KubernetesFluxConfiguration#access_key}.

---

##### `LocalAuthReference`<sup>Optional</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.localAuthReference"></a>

```csharp
public string LocalAuthReference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}.

---

##### `SecretKeyBase64`<sup>Optional</sup> <a name="SecretKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.secretKeyBase64"></a>

```csharp
public string SecretKeyBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#secret_key_base64 KubernetesFluxConfiguration#secret_key_base64}.

---

##### `SyncIntervalInSeconds`<sup>Optional</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

##### `TlsEnabled`<sup>Optional</sup> <a name="TlsEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket.property.tlsEnabled"></a>

```csharp
public object TlsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#tls_enabled KubernetesFluxConfiguration#tls_enabled}.

---

### KubernetesFluxConfigurationConfig <a name="KubernetesFluxConfigurationConfig" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    object Kustomizations,
    string Name,
    string Namespace,
    KubernetesFluxConfigurationBlobStorage BlobStorage = null,
    KubernetesFluxConfigurationBucket Bucket = null,
    object ContinuousReconciliationEnabled = null,
    KubernetesFluxConfigurationGitRepository GitRepository = null,
    string Id = null,
    string Scope = null,
    KubernetesFluxConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#cluster_id KubernetesFluxConfiguration#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.kustomizations">Kustomizations</a></code> | <code>object</code> | kustomizations block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#namespace KubernetesFluxConfiguration#namespace}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.blobStorage">BlobStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a></code> | blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.bucket">Bucket</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a></code> | bucket block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled">ContinuousReconciliationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#continuous_reconciliation_enabled KubernetesFluxConfiguration#continuous_reconciliation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.gitRepository">GitRepository</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a></code> | git_repository block. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#id KubernetesFluxConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#scope KubernetesFluxConfiguration#scope}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#cluster_id KubernetesFluxConfiguration#cluster_id}.

---

##### `Kustomizations`<sup>Required</sup> <a name="Kustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.kustomizations"></a>

```csharp
public object Kustomizations { get; set; }
```

- *Type:* object

kustomizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#kustomizations KubernetesFluxConfiguration#kustomizations}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#namespace KubernetesFluxConfiguration#namespace}.

---

##### `BlobStorage`<sup>Optional</sup> <a name="BlobStorage" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.blobStorage"></a>

```csharp
public KubernetesFluxConfigurationBlobStorage BlobStorage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#blob_storage KubernetesFluxConfiguration#blob_storage}

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.bucket"></a>

```csharp
public KubernetesFluxConfigurationBucket Bucket { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#bucket KubernetesFluxConfiguration#bucket}

---

##### `ContinuousReconciliationEnabled`<sup>Optional</sup> <a name="ContinuousReconciliationEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.continuousReconciliationEnabled"></a>

```csharp
public object ContinuousReconciliationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#continuous_reconciliation_enabled KubernetesFluxConfiguration#continuous_reconciliation_enabled}.

---

##### `GitRepository`<sup>Optional</sup> <a name="GitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.gitRepository"></a>

```csharp
public KubernetesFluxConfigurationGitRepository GitRepository { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

git_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#git_repository KubernetesFluxConfiguration#git_repository}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#id KubernetesFluxConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#scope KubernetesFluxConfiguration#scope}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationConfig.property.timeouts"></a>

```csharp
public KubernetesFluxConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts">KubernetesFluxConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#timeouts KubernetesFluxConfiguration#timeouts}

---

### KubernetesFluxConfigurationGitRepository <a name="KubernetesFluxConfigurationGitRepository" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationGitRepository {
    string ReferenceType,
    string ReferenceValue,
    string Url,
    string HttpsCaCertBase64 = null,
    string HttpsKeyBase64 = null,
    string HttpsUser = null,
    string LocalAuthReference = null,
    string SshKnownHostsBase64 = null,
    string SshPrivateKeyBase64 = null,
    double SyncIntervalInSeconds = null,
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceType">ReferenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#reference_type KubernetesFluxConfiguration#reference_type}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceValue">ReferenceValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#reference_value KubernetesFluxConfiguration#reference_value}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64">HttpsCaCertBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#https_ca_cert_base64 KubernetesFluxConfiguration#https_ca_cert_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsKeyBase64">HttpsKeyBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#https_key_base64 KubernetesFluxConfiguration#https_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsUser">HttpsUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#https_user KubernetesFluxConfiguration#https_user}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.localAuthReference">LocalAuthReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64">SshKnownHostsBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#ssh_known_hosts_base64 KubernetesFluxConfiguration#ssh_known_hosts_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64">SshPrivateKeyBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#ssh_private_key_base64 KubernetesFluxConfiguration#ssh_private_key_base64}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `ReferenceType`<sup>Required</sup> <a name="ReferenceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceType"></a>

```csharp
public string ReferenceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#reference_type KubernetesFluxConfiguration#reference_type}.

---

##### `ReferenceValue`<sup>Required</sup> <a name="ReferenceValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.referenceValue"></a>

```csharp
public string ReferenceValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#reference_value KubernetesFluxConfiguration#reference_value}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#url KubernetesFluxConfiguration#url}.

---

##### `HttpsCaCertBase64`<sup>Optional</sup> <a name="HttpsCaCertBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsCaCertBase64"></a>

```csharp
public string HttpsCaCertBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#https_ca_cert_base64 KubernetesFluxConfiguration#https_ca_cert_base64}.

---

##### `HttpsKeyBase64`<sup>Optional</sup> <a name="HttpsKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsKeyBase64"></a>

```csharp
public string HttpsKeyBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#https_key_base64 KubernetesFluxConfiguration#https_key_base64}.

---

##### `HttpsUser`<sup>Optional</sup> <a name="HttpsUser" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.httpsUser"></a>

```csharp
public string HttpsUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#https_user KubernetesFluxConfiguration#https_user}.

---

##### `LocalAuthReference`<sup>Optional</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.localAuthReference"></a>

```csharp
public string LocalAuthReference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#local_auth_reference KubernetesFluxConfiguration#local_auth_reference}.

---

##### `SshKnownHostsBase64`<sup>Optional</sup> <a name="SshKnownHostsBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshKnownHostsBase64"></a>

```csharp
public string SshKnownHostsBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#ssh_known_hosts_base64 KubernetesFluxConfiguration#ssh_known_hosts_base64}.

---

##### `SshPrivateKeyBase64`<sup>Optional</sup> <a name="SshPrivateKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.sshPrivateKeyBase64"></a>

```csharp
public string SshPrivateKeyBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#ssh_private_key_base64 KubernetesFluxConfiguration#ssh_private_key_base64}.

---

##### `SyncIntervalInSeconds`<sup>Optional</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

### KubernetesFluxConfigurationKustomizations <a name="KubernetesFluxConfigurationKustomizations" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationKustomizations {
    string Name,
    string[] DependsOn = null,
    object GarbageCollectionEnabled = null,
    string Path = null,
    object RecreatingEnabled = null,
    double RetryIntervalInSeconds = null,
    double SyncIntervalInSeconds = null,
    double TimeoutInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#depends_on KubernetesFluxConfiguration#depends_on}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled">GarbageCollectionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#garbage_collection_enabled KubernetesFluxConfiguration#garbage_collection_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#path KubernetesFluxConfiguration#path}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.recreatingEnabled">RecreatingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#recreating_enabled KubernetesFluxConfiguration#recreating_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds">RetryIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#retry_interval_in_seconds KubernetesFluxConfiguration#retry_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#name KubernetesFluxConfiguration#name}.

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#depends_on KubernetesFluxConfiguration#depends_on}.

---

##### `GarbageCollectionEnabled`<sup>Optional</sup> <a name="GarbageCollectionEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.garbageCollectionEnabled"></a>

```csharp
public object GarbageCollectionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#garbage_collection_enabled KubernetesFluxConfiguration#garbage_collection_enabled}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#path KubernetesFluxConfiguration#path}.

---

##### `RecreatingEnabled`<sup>Optional</sup> <a name="RecreatingEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.recreatingEnabled"></a>

```csharp
public object RecreatingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#recreating_enabled KubernetesFluxConfiguration#recreating_enabled}.

---

##### `RetryIntervalInSeconds`<sup>Optional</sup> <a name="RetryIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.retryIntervalInSeconds"></a>

```csharp
public double RetryIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#retry_interval_in_seconds KubernetesFluxConfiguration#retry_interval_in_seconds}.

---

##### `SyncIntervalInSeconds`<sup>Optional</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#sync_interval_in_seconds KubernetesFluxConfiguration#sync_interval_in_seconds}.

---

##### `TimeoutInSeconds`<sup>Optional</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizations.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#timeout_in_seconds KubernetesFluxConfiguration#timeout_in_seconds}.

---

### KubernetesFluxConfigurationTimeouts <a name="KubernetesFluxConfigurationTimeouts" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#create KubernetesFluxConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#delete KubernetesFluxConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#read KubernetesFluxConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#update KubernetesFluxConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#create KubernetesFluxConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#delete KubernetesFluxConfiguration#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#read KubernetesFluxConfiguration#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/kubernetes_flux_configuration#update KubernetesFluxConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference <a name="KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference.property.internalValue"></a>

```csharp
public KubernetesFluxConfigurationBlobStorageManagedIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

---


### KubernetesFluxConfigurationBlobStorageOutputReference <a name="KubernetesFluxConfigurationBlobStorageOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationBlobStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putManagedIdentity">PutManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal">PutServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey">ResetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference">ResetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetManagedIdentity">ResetManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken">ResetSasToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal">ResetServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds">ResetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedIdentity` <a name="PutManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putManagedIdentity"></a>

```csharp
private void PutManagedIdentity(KubernetesFluxConfigurationBlobStorageManagedIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putManagedIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

---

##### `PutServicePrincipal` <a name="PutServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal"></a>

```csharp
private void PutServicePrincipal(KubernetesFluxConfigurationBlobStorageServicePrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.putServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `ResetAccountKey` <a name="ResetAccountKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetAccountKey"></a>

```csharp
private void ResetAccountKey()
```

##### `ResetLocalAuthReference` <a name="ResetLocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetLocalAuthReference"></a>

```csharp
private void ResetLocalAuthReference()
```

##### `ResetManagedIdentity` <a name="ResetManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetManagedIdentity"></a>

```csharp
private void ResetManagedIdentity()
```

##### `ResetSasToken` <a name="ResetSasToken" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSasToken"></a>

```csharp
private void ResetSasToken()
```

##### `ResetServicePrincipal` <a name="ResetServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetServicePrincipal"></a>

```csharp
private void ResetServicePrincipal()
```

##### `ResetSyncIntervalInSeconds` <a name="ResetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetSyncIntervalInSeconds"></a>

```csharp
private void ResetSyncIntervalInSeconds()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentity">ManagedIdentity</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference">KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal">ServicePrincipal</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput">AccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput">ContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput">LocalAuthReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentityInput">ManagedIdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput">SasTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput">ServicePrincipalInput</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput">SyncIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey">AccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerId">ContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference">LocalAuthReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken">SasToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedIdentity`<sup>Required</sup> <a name="ManagedIdentity" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentity"></a>

```csharp
public KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference ManagedIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference">KubernetesFluxConfigurationBlobStorageManagedIdentityOutputReference</a>

---

##### `ServicePrincipal`<sup>Required</sup> <a name="ServicePrincipal" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipal"></a>

```csharp
public KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference ServicePrincipal { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference">KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference</a>

---

##### `AccountKeyInput`<sup>Optional</sup> <a name="AccountKeyInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKeyInput"></a>

```csharp
public string AccountKeyInput { get; }
```

- *Type:* string

---

##### `ContainerIdInput`<sup>Optional</sup> <a name="ContainerIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerIdInput"></a>

```csharp
public string ContainerIdInput { get; }
```

- *Type:* string

---

##### `LocalAuthReferenceInput`<sup>Optional</sup> <a name="LocalAuthReferenceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReferenceInput"></a>

```csharp
public string LocalAuthReferenceInput { get; }
```

- *Type:* string

---

##### `ManagedIdentityInput`<sup>Optional</sup> <a name="ManagedIdentityInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.managedIdentityInput"></a>

```csharp
public KubernetesFluxConfigurationBlobStorageManagedIdentity ManagedIdentityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageManagedIdentity">KubernetesFluxConfigurationBlobStorageManagedIdentity</a>

---

##### `SasTokenInput`<sup>Optional</sup> <a name="SasTokenInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasTokenInput"></a>

```csharp
public string SasTokenInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalInput`<sup>Optional</sup> <a name="ServicePrincipalInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.servicePrincipalInput"></a>

```csharp
public KubernetesFluxConfigurationBlobStorageServicePrincipal ServicePrincipalInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---

##### `SyncIntervalInSecondsInput`<sup>Optional</sup> <a name="SyncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSecondsInput"></a>

```csharp
public double SyncIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.accountKey"></a>

```csharp
public string AccountKey { get; }
```

- *Type:* string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.containerId"></a>

```csharp
public string ContainerId { get; }
```

- *Type:* string

---

##### `LocalAuthReference`<sup>Required</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.localAuthReference"></a>

```csharp
public string LocalAuthReference { get; }
```

- *Type:* string

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.sasToken"></a>

```csharp
public string SasToken { get; }
```

- *Type:* string

---

##### `SyncIntervalInSeconds`<sup>Required</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageOutputReference.property.internalValue"></a>

```csharp
public KubernetesFluxConfigurationBlobStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorage">KubernetesFluxConfigurationBlobStorage</a>

---


### KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference <a name="KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64">ResetClientCertificateBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword">ResetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain">ResetClientCertificateSendChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientCertificateBase64` <a name="ResetClientCertificateBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateBase64"></a>

```csharp
private void ResetClientCertificateBase64()
```

##### `ResetClientCertificatePassword` <a name="ResetClientCertificatePassword" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificatePassword"></a>

```csharp
private void ResetClientCertificatePassword()
```

##### `ResetClientCertificateSendChain` <a name="ResetClientCertificateSendChain" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientCertificateSendChain"></a>

```csharp
private void ResetClientCertificateSendChain()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input">ClientCertificateBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput">ClientCertificatePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput">ClientCertificateSendChainInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64">ClientCertificateBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain">ClientCertificateSendChain</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientCertificateBase64Input`<sup>Optional</sup> <a name="ClientCertificateBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64Input"></a>

```csharp
public string ClientCertificateBase64Input { get; }
```

- *Type:* string

---

##### `ClientCertificatePasswordInput`<sup>Optional</sup> <a name="ClientCertificatePasswordInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePasswordInput"></a>

```csharp
public string ClientCertificatePasswordInput { get; }
```

- *Type:* string

---

##### `ClientCertificateSendChainInput`<sup>Optional</sup> <a name="ClientCertificateSendChainInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChainInput"></a>

```csharp
public object ClientCertificateSendChainInput { get; }
```

- *Type:* object

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ClientCertificateBase64`<sup>Required</sup> <a name="ClientCertificateBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateBase64"></a>

```csharp
public string ClientCertificateBase64 { get; }
```

- *Type:* string

---

##### `ClientCertificatePassword`<sup>Required</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificatePassword"></a>

```csharp
public string ClientCertificatePassword { get; }
```

- *Type:* string

---

##### `ClientCertificateSendChain`<sup>Required</sup> <a name="ClientCertificateSendChain" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientCertificateSendChain"></a>

```csharp
public object ClientCertificateSendChain { get; }
```

- *Type:* object

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipalOutputReference.property.internalValue"></a>

```csharp
public KubernetesFluxConfigurationBlobStorageServicePrincipal InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBlobStorageServicePrincipal">KubernetesFluxConfigurationBlobStorageServicePrincipal</a>

---


### KubernetesFluxConfigurationBucketOutputReference <a name="KubernetesFluxConfigurationBucketOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationBucketOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference">ResetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64">ResetSecretKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds">ResetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled">ResetTlsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetAccessKey"></a>

```csharp
private void ResetAccessKey()
```

##### `ResetLocalAuthReference` <a name="ResetLocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetLocalAuthReference"></a>

```csharp
private void ResetLocalAuthReference()
```

##### `ResetSecretKeyBase64` <a name="ResetSecretKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSecretKeyBase64"></a>

```csharp
private void ResetSecretKeyBase64()
```

##### `ResetSyncIntervalInSeconds` <a name="ResetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetSyncIntervalInSeconds"></a>

```csharp
private void ResetSyncIntervalInSeconds()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```

##### `ResetTlsEnabled` <a name="ResetTlsEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.resetTlsEnabled"></a>

```csharp
private void ResetTlsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput">LocalAuthReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input">SecretKeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput">SyncIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput">TlsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReference">LocalAuthReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64">SecretKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled">TlsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `LocalAuthReferenceInput`<sup>Optional</sup> <a name="LocalAuthReferenceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReferenceInput"></a>

```csharp
public string LocalAuthReferenceInput { get; }
```

- *Type:* string

---

##### `SecretKeyBase64Input`<sup>Optional</sup> <a name="SecretKeyBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64Input"></a>

```csharp
public string SecretKeyBase64Input { get; }
```

- *Type:* string

---

##### `SyncIntervalInSecondsInput`<sup>Optional</sup> <a name="SyncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSecondsInput"></a>

```csharp
public double SyncIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `TlsEnabledInput`<sup>Optional</sup> <a name="TlsEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabledInput"></a>

```csharp
public object TlsEnabledInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `LocalAuthReference`<sup>Required</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.localAuthReference"></a>

```csharp
public string LocalAuthReference { get; }
```

- *Type:* string

---

##### `SecretKeyBase64`<sup>Required</sup> <a name="SecretKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.secretKeyBase64"></a>

```csharp
public string SecretKeyBase64 { get; }
```

- *Type:* string

---

##### `SyncIntervalInSeconds`<sup>Required</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `TlsEnabled`<sup>Required</sup> <a name="TlsEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.tlsEnabled"></a>

```csharp
public object TlsEnabled { get; }
```

- *Type:* object

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucketOutputReference.property.internalValue"></a>

```csharp
public KubernetesFluxConfigurationBucket InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationBucket">KubernetesFluxConfigurationBucket</a>

---


### KubernetesFluxConfigurationGitRepositoryOutputReference <a name="KubernetesFluxConfigurationGitRepositoryOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationGitRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64">ResetHttpsCaCertBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64">ResetHttpsKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser">ResetHttpsUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference">ResetLocalAuthReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64">ResetSshKnownHostsBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64">ResetSshPrivateKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds">ResetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpsCaCertBase64` <a name="ResetHttpsCaCertBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsCaCertBase64"></a>

```csharp
private void ResetHttpsCaCertBase64()
```

##### `ResetHttpsKeyBase64` <a name="ResetHttpsKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsKeyBase64"></a>

```csharp
private void ResetHttpsKeyBase64()
```

##### `ResetHttpsUser` <a name="ResetHttpsUser" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetHttpsUser"></a>

```csharp
private void ResetHttpsUser()
```

##### `ResetLocalAuthReference` <a name="ResetLocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetLocalAuthReference"></a>

```csharp
private void ResetLocalAuthReference()
```

##### `ResetSshKnownHostsBase64` <a name="ResetSshKnownHostsBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshKnownHostsBase64"></a>

```csharp
private void ResetSshKnownHostsBase64()
```

##### `ResetSshPrivateKeyBase64` <a name="ResetSshPrivateKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSshPrivateKeyBase64"></a>

```csharp
private void ResetSshPrivateKeyBase64()
```

##### `ResetSyncIntervalInSeconds` <a name="ResetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetSyncIntervalInSeconds"></a>

```csharp
private void ResetSyncIntervalInSeconds()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input">HttpsCaCertBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input">HttpsKeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput">HttpsUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput">LocalAuthReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput">ReferenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput">ReferenceValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input">SshKnownHostsBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input">SshPrivateKeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput">SyncIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64">HttpsCaCertBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64">HttpsKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser">HttpsUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference">LocalAuthReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType">ReferenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue">ReferenceValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64">SshKnownHostsBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64">SshPrivateKeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpsCaCertBase64Input`<sup>Optional</sup> <a name="HttpsCaCertBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64Input"></a>

```csharp
public string HttpsCaCertBase64Input { get; }
```

- *Type:* string

---

##### `HttpsKeyBase64Input`<sup>Optional</sup> <a name="HttpsKeyBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64Input"></a>

```csharp
public string HttpsKeyBase64Input { get; }
```

- *Type:* string

---

##### `HttpsUserInput`<sup>Optional</sup> <a name="HttpsUserInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUserInput"></a>

```csharp
public string HttpsUserInput { get; }
```

- *Type:* string

---

##### `LocalAuthReferenceInput`<sup>Optional</sup> <a name="LocalAuthReferenceInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReferenceInput"></a>

```csharp
public string LocalAuthReferenceInput { get; }
```

- *Type:* string

---

##### `ReferenceTypeInput`<sup>Optional</sup> <a name="ReferenceTypeInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceTypeInput"></a>

```csharp
public string ReferenceTypeInput { get; }
```

- *Type:* string

---

##### `ReferenceValueInput`<sup>Optional</sup> <a name="ReferenceValueInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValueInput"></a>

```csharp
public string ReferenceValueInput { get; }
```

- *Type:* string

---

##### `SshKnownHostsBase64Input`<sup>Optional</sup> <a name="SshKnownHostsBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64Input"></a>

```csharp
public string SshKnownHostsBase64Input { get; }
```

- *Type:* string

---

##### `SshPrivateKeyBase64Input`<sup>Optional</sup> <a name="SshPrivateKeyBase64Input" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64Input"></a>

```csharp
public string SshPrivateKeyBase64Input { get; }
```

- *Type:* string

---

##### `SyncIntervalInSecondsInput`<sup>Optional</sup> <a name="SyncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSecondsInput"></a>

```csharp
public double SyncIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `HttpsCaCertBase64`<sup>Required</sup> <a name="HttpsCaCertBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsCaCertBase64"></a>

```csharp
public string HttpsCaCertBase64 { get; }
```

- *Type:* string

---

##### `HttpsKeyBase64`<sup>Required</sup> <a name="HttpsKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsKeyBase64"></a>

```csharp
public string HttpsKeyBase64 { get; }
```

- *Type:* string

---

##### `HttpsUser`<sup>Required</sup> <a name="HttpsUser" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.httpsUser"></a>

```csharp
public string HttpsUser { get; }
```

- *Type:* string

---

##### `LocalAuthReference`<sup>Required</sup> <a name="LocalAuthReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.localAuthReference"></a>

```csharp
public string LocalAuthReference { get; }
```

- *Type:* string

---

##### `ReferenceType`<sup>Required</sup> <a name="ReferenceType" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceType"></a>

```csharp
public string ReferenceType { get; }
```

- *Type:* string

---

##### `ReferenceValue`<sup>Required</sup> <a name="ReferenceValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.referenceValue"></a>

```csharp
public string ReferenceValue { get; }
```

- *Type:* string

---

##### `SshKnownHostsBase64`<sup>Required</sup> <a name="SshKnownHostsBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshKnownHostsBase64"></a>

```csharp
public string SshKnownHostsBase64 { get; }
```

- *Type:* string

---

##### `SshPrivateKeyBase64`<sup>Required</sup> <a name="SshPrivateKeyBase64" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.sshPrivateKeyBase64"></a>

```csharp
public string SshPrivateKeyBase64 { get; }
```

- *Type:* string

---

##### `SyncIntervalInSeconds`<sup>Required</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepositoryOutputReference.property.internalValue"></a>

```csharp
public KubernetesFluxConfigurationGitRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationGitRepository">KubernetesFluxConfigurationGitRepository</a>

---


### KubernetesFluxConfigurationKustomizationsList <a name="KubernetesFluxConfigurationKustomizationsList" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationKustomizationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.get"></a>

```csharp
private KubernetesFluxConfigurationKustomizationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesFluxConfigurationKustomizationsOutputReference <a name="KubernetesFluxConfigurationKustomizationsOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationKustomizationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn">ResetDependsOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled">ResetGarbageCollectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled">ResetRecreatingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds">ResetRetryIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds">ResetSyncIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds">ResetTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDependsOn` <a name="ResetDependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetDependsOn"></a>

```csharp
private void ResetDependsOn()
```

##### `ResetGarbageCollectionEnabled` <a name="ResetGarbageCollectionEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetGarbageCollectionEnabled"></a>

```csharp
private void ResetGarbageCollectionEnabled()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRecreatingEnabled` <a name="ResetRecreatingEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRecreatingEnabled"></a>

```csharp
private void ResetRecreatingEnabled()
```

##### `ResetRetryIntervalInSeconds` <a name="ResetRetryIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetRetryIntervalInSeconds"></a>

```csharp
private void ResetRetryIntervalInSeconds()
```

##### `ResetSyncIntervalInSeconds` <a name="ResetSyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetSyncIntervalInSeconds"></a>

```csharp
private void ResetSyncIntervalInSeconds()
```

##### `ResetTimeoutInSeconds` <a name="ResetTimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.resetTimeoutInSeconds"></a>

```csharp
private void ResetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput">DependsOnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput">GarbageCollectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput">RecreatingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput">RetryIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput">SyncIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput">TimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled">GarbageCollectionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled">RecreatingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds">RetryIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds">SyncIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DependsOnInput`<sup>Optional</sup> <a name="DependsOnInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOnInput"></a>

```csharp
public string[] DependsOnInput { get; }
```

- *Type:* string[]

---

##### `GarbageCollectionEnabledInput`<sup>Optional</sup> <a name="GarbageCollectionEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabledInput"></a>

```csharp
public object GarbageCollectionEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RecreatingEnabledInput`<sup>Optional</sup> <a name="RecreatingEnabledInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabledInput"></a>

```csharp
public object RecreatingEnabledInput { get; }
```

- *Type:* object

---

##### `RetryIntervalInSecondsInput`<sup>Optional</sup> <a name="RetryIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSecondsInput"></a>

```csharp
public double RetryIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `SyncIntervalInSecondsInput`<sup>Optional</sup> <a name="SyncIntervalInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSecondsInput"></a>

```csharp
public double SyncIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `TimeoutInSecondsInput`<sup>Optional</sup> <a name="TimeoutInSecondsInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSecondsInput"></a>

```csharp
public double TimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Required</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `GarbageCollectionEnabled`<sup>Required</sup> <a name="GarbageCollectionEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.garbageCollectionEnabled"></a>

```csharp
public object GarbageCollectionEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RecreatingEnabled`<sup>Required</sup> <a name="RecreatingEnabled" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.recreatingEnabled"></a>

```csharp
public object RecreatingEnabled { get; }
```

- *Type:* object

---

##### `RetryIntervalInSeconds`<sup>Required</sup> <a name="RetryIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.retryIntervalInSeconds"></a>

```csharp
public double RetryIntervalInSeconds { get; }
```

- *Type:* double

---

##### `SyncIntervalInSeconds`<sup>Required</sup> <a name="SyncIntervalInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.syncIntervalInSeconds"></a>

```csharp
public double SyncIntervalInSeconds { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationKustomizationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KubernetesFluxConfigurationTimeoutsOutputReference <a name="KubernetesFluxConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KubernetesFluxConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesFluxConfiguration.KubernetesFluxConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



