# `azurerm_app_service_slot_custom_hostname_binding`

Refer to the Terraform Registory for docs: [`azurerm_app_service_slot_custom_hostname_binding`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding).

# `appServiceSlotCustomHostnameBinding` Submodule <a name="`appServiceSlotCustomHostnameBinding` Submodule" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSlotCustomHostnameBinding <a name="AppServiceSlotCustomHostnameBinding" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding azurerm_app_service_slot_custom_hostname_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/appserviceslotcustomhostnamebinding"

appserviceslotcustomhostnamebinding.NewAppServiceSlotCustomHostnameBinding(scope Construct, id *string, config AppServiceSlotCustomHostnameBindingConfig) AppServiceSlotCustomHostnameBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig">AppServiceSlotCustomHostnameBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig">AppServiceSlotCustomHostnameBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetSslState">ResetSslState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetThumbprint">ResetThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.putTimeouts"></a>

```go
func PutTimeouts(value AppServiceSlotCustomHostnameBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts">AppServiceSlotCustomHostnameBindingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetSslState` <a name="ResetSslState" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetSslState"></a>

```go
func ResetSslState()
```

##### `ResetThumbprint` <a name="ResetThumbprint" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetThumbprint"></a>

```go
func ResetThumbprint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/appserviceslotcustomhostnamebinding"

appserviceslotcustomhostnamebinding.AppServiceSlotCustomHostnameBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/appserviceslotcustomhostnamebinding"

appserviceslotcustomhostnamebinding.AppServiceSlotCustomHostnameBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/appserviceslotcustomhostnamebinding"

appserviceslotcustomhostnamebinding.AppServiceSlotCustomHostnameBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference">AppServiceSlotCustomHostnameBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.virtualIp">VirtualIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.appServiceSlotIdInput">AppServiceSlotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.sslStateInput">SslStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.thumbprintInput">ThumbprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.appServiceSlotId">AppServiceSlotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.sslState">SslState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.timeouts"></a>

```go
func Timeouts() AppServiceSlotCustomHostnameBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference">AppServiceSlotCustomHostnameBindingTimeoutsOutputReference</a>

---

##### `VirtualIp`<sup>Required</sup> <a name="VirtualIp" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.virtualIp"></a>

```go
func VirtualIp() *string
```

- *Type:* *string

---

##### `AppServiceSlotIdInput`<sup>Optional</sup> <a name="AppServiceSlotIdInput" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.appServiceSlotIdInput"></a>

```go
func AppServiceSlotIdInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SslStateInput`<sup>Optional</sup> <a name="SslStateInput" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.sslStateInput"></a>

```go
func SslStateInput() *string
```

- *Type:* *string

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.thumbprintInput"></a>

```go
func ThumbprintInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AppServiceSlotId`<sup>Required</sup> <a name="AppServiceSlotId" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.appServiceSlotId"></a>

```go
func AppServiceSlotId() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SslState`<sup>Required</sup> <a name="SslState" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.sslState"></a>

```go
func SslState() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSlotCustomHostnameBindingConfig <a name="AppServiceSlotCustomHostnameBindingConfig" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/appserviceslotcustomhostnamebinding"

&appserviceslotcustomhostnamebinding.AppServiceSlotCustomHostnameBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppServiceSlotId: *string,
	Hostname: *string,
	Id: *string,
	SslState: *string,
	Thumbprint: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.appServiceSlotId">AppServiceSlotId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#app_service_slot_id AppServiceSlotCustomHostnameBinding#app_service_slot_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#hostname AppServiceSlotCustomHostnameBinding#hostname}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#id AppServiceSlotCustomHostnameBinding#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.sslState">SslState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#ssl_state AppServiceSlotCustomHostnameBinding#ssl_state}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#thumbprint AppServiceSlotCustomHostnameBinding#thumbprint}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts">AppServiceSlotCustomHostnameBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppServiceSlotId`<sup>Required</sup> <a name="AppServiceSlotId" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.appServiceSlotId"></a>

```go
AppServiceSlotId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#app_service_slot_id AppServiceSlotCustomHostnameBinding#app_service_slot_id}.

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#hostname AppServiceSlotCustomHostnameBinding#hostname}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#id AppServiceSlotCustomHostnameBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SslState`<sup>Optional</sup> <a name="SslState" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.sslState"></a>

```go
SslState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#ssl_state AppServiceSlotCustomHostnameBinding#ssl_state}.

---

##### `Thumbprint`<sup>Optional</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.thumbprint"></a>

```go
Thumbprint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#thumbprint AppServiceSlotCustomHostnameBinding#thumbprint}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingConfig.property.timeouts"></a>

```go
Timeouts AppServiceSlotCustomHostnameBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts">AppServiceSlotCustomHostnameBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#timeouts AppServiceSlotCustomHostnameBinding#timeouts}

---

### AppServiceSlotCustomHostnameBindingTimeouts <a name="AppServiceSlotCustomHostnameBindingTimeouts" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/appserviceslotcustomhostnamebinding"

&appserviceslotcustomhostnamebinding.AppServiceSlotCustomHostnameBindingTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#create AppServiceSlotCustomHostnameBinding#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#delete AppServiceSlotCustomHostnameBinding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#read AppServiceSlotCustomHostnameBinding#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#create AppServiceSlotCustomHostnameBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#delete AppServiceSlotCustomHostnameBinding#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/resources/app_service_slot_custom_hostname_binding#read AppServiceSlotCustomHostnameBinding#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSlotCustomHostnameBindingTimeoutsOutputReference <a name="AppServiceSlotCustomHostnameBindingTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/appserviceslotcustomhostnamebinding"

appserviceslotcustomhostnamebinding.NewAppServiceSlotCustomHostnameBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppServiceSlotCustomHostnameBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.appServiceSlotCustomHostnameBinding.AppServiceSlotCustomHostnameBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



