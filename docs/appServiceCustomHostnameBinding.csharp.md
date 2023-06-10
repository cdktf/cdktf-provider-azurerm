# `azurerm_app_service_custom_hostname_binding`

Refer to the Terraform Registory for docs: [`azurerm_app_service_custom_hostname_binding`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding).

# `appServiceCustomHostnameBinding` Submodule <a name="`appServiceCustomHostnameBinding` Submodule" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceCustomHostnameBinding <a name="AppServiceCustomHostnameBinding" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding azurerm_app_service_custom_hostname_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceCustomHostnameBinding(Construct Scope, string Id, AppServiceCustomHostnameBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig">AppServiceCustomHostnameBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig">AppServiceCustomHostnameBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetSslState">ResetSslState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetThumbprint">ResetThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(AppServiceCustomHostnameBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSslState` <a name="ResetSslState" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetSslState"></a>

```csharp
private void ResetSslState()
```

##### `ResetThumbprint` <a name="ResetThumbprint" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetThumbprint"></a>

```csharp
private void ResetThumbprint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceCustomHostnameBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceCustomHostnameBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

AppServiceCustomHostnameBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference">AppServiceCustomHostnameBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.virtualIp">VirtualIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceNameInput">AppServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslStateInput">SslStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprintInput">ThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceName">AppServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslState">SslState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeouts"></a>

```csharp
public AppServiceCustomHostnameBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference">AppServiceCustomHostnameBindingTimeoutsOutputReference</a>

---

##### `VirtualIp`<sup>Required</sup> <a name="VirtualIp" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.virtualIp"></a>

```csharp
public string VirtualIp { get; }
```

- *Type:* string

---

##### `AppServiceNameInput`<sup>Optional</sup> <a name="AppServiceNameInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceNameInput"></a>

```csharp
public string AppServiceNameInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SslStateInput`<sup>Optional</sup> <a name="SslStateInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslStateInput"></a>

```csharp
public string SslStateInput { get; }
```

- *Type:* string

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprintInput"></a>

```csharp
public string ThumbprintInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AppServiceName`<sup>Required</sup> <a name="AppServiceName" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.appServiceName"></a>

```csharp
public string AppServiceName { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SslState`<sup>Required</sup> <a name="SslState" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.sslState"></a>

```csharp
public string SslState { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceCustomHostnameBindingConfig <a name="AppServiceCustomHostnameBindingConfig" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceCustomHostnameBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppServiceName,
    string Hostname,
    string ResourceGroupName,
    string Id = null,
    string SslState = null,
    string Thumbprint = null,
    AppServiceCustomHostnameBindingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.appServiceName">AppServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#app_service_name AppServiceCustomHostnameBinding#app_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#hostname AppServiceCustomHostnameBinding#hostname}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#resource_group_name AppServiceCustomHostnameBinding#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#id AppServiceCustomHostnameBinding#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.sslState">SslState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#ssl_state AppServiceCustomHostnameBinding#ssl_state}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.thumbprint">Thumbprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#thumbprint AppServiceCustomHostnameBinding#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppServiceName`<sup>Required</sup> <a name="AppServiceName" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.appServiceName"></a>

```csharp
public string AppServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#app_service_name AppServiceCustomHostnameBinding#app_service_name}.

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#hostname AppServiceCustomHostnameBinding#hostname}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#resource_group_name AppServiceCustomHostnameBinding#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#id AppServiceCustomHostnameBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SslState`<sup>Optional</sup> <a name="SslState" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.sslState"></a>

```csharp
public string SslState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#ssl_state AppServiceCustomHostnameBinding#ssl_state}.

---

##### `Thumbprint`<sup>Optional</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.thumbprint"></a>

```csharp
public string Thumbprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#thumbprint AppServiceCustomHostnameBinding#thumbprint}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingConfig.property.timeouts"></a>

```csharp
public AppServiceCustomHostnameBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts">AppServiceCustomHostnameBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#timeouts AppServiceCustomHostnameBinding#timeouts}

---

### AppServiceCustomHostnameBindingTimeouts <a name="AppServiceCustomHostnameBindingTimeouts" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceCustomHostnameBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#create AppServiceCustomHostnameBinding#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#delete AppServiceCustomHostnameBinding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#read AppServiceCustomHostnameBinding#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#update AppServiceCustomHostnameBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#create AppServiceCustomHostnameBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#delete AppServiceCustomHostnameBinding#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#read AppServiceCustomHostnameBinding#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/app_service_custom_hostname_binding#update AppServiceCustomHostnameBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceCustomHostnameBindingTimeoutsOutputReference <a name="AppServiceCustomHostnameBindingTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new AppServiceCustomHostnameBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceCustomHostnameBinding.AppServiceCustomHostnameBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



