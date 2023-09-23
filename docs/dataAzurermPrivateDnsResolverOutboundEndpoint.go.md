# `data_azurerm_private_dns_resolver_outbound_endpoint`

Refer to the Terraform Registory for docs: [`data_azurerm_private_dns_resolver_outbound_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_outbound_endpoint).

# `dataAzurermPrivateDnsResolverOutboundEndpoint` Submodule <a name="`dataAzurermPrivateDnsResolverOutboundEndpoint` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsResolverOutboundEndpoint <a name="DataAzurermPrivateDnsResolverOutboundEndpoint" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_outbound_endpoint azurerm_private_dns_resolver_outbound_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolveroutboundendpoint"

dataazurermprivatednsresolveroutboundendpoint.NewDataAzurermPrivateDnsResolverOutboundEndpoint(scope Construct, id *string, config DataAzurermPrivateDnsResolverOutboundEndpointConfig) DataAzurermPrivateDnsResolverOutboundEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig">DataAzurermPrivateDnsResolverOutboundEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig">DataAzurermPrivateDnsResolverOutboundEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermPrivateDnsResolverOutboundEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts">DataAzurermPrivateDnsResolverOutboundEndpointTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolveroutboundendpoint"

dataazurermprivatednsresolveroutboundendpoint.DataAzurermPrivateDnsResolverOutboundEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolveroutboundendpoint"

dataazurermprivatednsresolveroutboundendpoint.DataAzurermPrivateDnsResolverOutboundEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolveroutboundendpoint"

dataazurermprivatednsresolveroutboundendpoint.DataAzurermPrivateDnsResolverOutboundEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference">DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.privateDnsResolverIdInput">PrivateDnsResolverIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.privateDnsResolverId">PrivateDnsResolverId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.timeouts"></a>

```go
func Timeouts() DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference">DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateDnsResolverIdInput`<sup>Optional</sup> <a name="PrivateDnsResolverIdInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.privateDnsResolverIdInput"></a>

```go
func PrivateDnsResolverIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateDnsResolverId`<sup>Required</sup> <a name="PrivateDnsResolverId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.privateDnsResolverId"></a>

```go
func PrivateDnsResolverId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsResolverOutboundEndpointConfig <a name="DataAzurermPrivateDnsResolverOutboundEndpointConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolveroutboundendpoint"

&dataazurermprivatednsresolveroutboundendpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PrivateDnsResolverId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_outbound_endpoint#name DataAzurermPrivateDnsResolverOutboundEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.privateDnsResolverId">PrivateDnsResolverId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_outbound_endpoint#private_dns_resolver_id DataAzurermPrivateDnsResolverOutboundEndpoint#private_dns_resolver_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_outbound_endpoint#id DataAzurermPrivateDnsResolverOutboundEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts">DataAzurermPrivateDnsResolverOutboundEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_outbound_endpoint#name DataAzurermPrivateDnsResolverOutboundEndpoint#name}.

---

##### `PrivateDnsResolverId`<sup>Required</sup> <a name="PrivateDnsResolverId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.privateDnsResolverId"></a>

```go
PrivateDnsResolverId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_outbound_endpoint#private_dns_resolver_id DataAzurermPrivateDnsResolverOutboundEndpoint#private_dns_resolver_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_outbound_endpoint#id DataAzurermPrivateDnsResolverOutboundEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointConfig.property.timeouts"></a>

```go
Timeouts DataAzurermPrivateDnsResolverOutboundEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts">DataAzurermPrivateDnsResolverOutboundEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_outbound_endpoint#timeouts DataAzurermPrivateDnsResolverOutboundEndpoint#timeouts}

---

### DataAzurermPrivateDnsResolverOutboundEndpointTimeouts <a name="DataAzurermPrivateDnsResolverOutboundEndpointTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolveroutboundendpoint"

&dataazurermprivatednsresolveroutboundendpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_outbound_endpoint#read DataAzurermPrivateDnsResolverOutboundEndpoint#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_outbound_endpoint#read DataAzurermPrivateDnsResolverOutboundEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference <a name="DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolveroutboundendpoint"

dataazurermprivatednsresolveroutboundendpoint.NewDataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverOutboundEndpoint.DataAzurermPrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



