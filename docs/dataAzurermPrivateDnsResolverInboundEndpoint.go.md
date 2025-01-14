# `dataAzurermPrivateDnsResolverInboundEndpoint` Submodule <a name="`dataAzurermPrivateDnsResolverInboundEndpoint` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsResolverInboundEndpoint <a name="DataAzurermPrivateDnsResolverInboundEndpoint" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/data-sources/private_dns_resolver_inbound_endpoint azurerm_private_dns_resolver_inbound_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolverinboundendpoint"

dataazurermprivatednsresolverinboundendpoint.NewDataAzurermPrivateDnsResolverInboundEndpoint(scope Construct, id *string, config DataAzurermPrivateDnsResolverInboundEndpointConfig) DataAzurermPrivateDnsResolverInboundEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig">DataAzurermPrivateDnsResolverInboundEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig">DataAzurermPrivateDnsResolverInboundEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermPrivateDnsResolverInboundEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts">DataAzurermPrivateDnsResolverInboundEndpointTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermPrivateDnsResolverInboundEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolverinboundendpoint"

dataazurermprivatednsresolverinboundendpoint.DataAzurermPrivateDnsResolverInboundEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolverinboundendpoint"

dataazurermprivatednsresolverinboundendpoint.DataAzurermPrivateDnsResolverInboundEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolverinboundendpoint"

dataazurermprivatednsresolverinboundendpoint.DataAzurermPrivateDnsResolverInboundEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolverinboundendpoint"

dataazurermprivatednsresolverinboundendpoint.DataAzurermPrivateDnsResolverInboundEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermPrivateDnsResolverInboundEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermPrivateDnsResolverInboundEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermPrivateDnsResolverInboundEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/data-sources/private_dns_resolver_inbound_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateDnsResolverInboundEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.ipConfigurations">IpConfigurations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList">DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference">DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.privateDnsResolverIdInput">PrivateDnsResolverIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.privateDnsResolverId">PrivateDnsResolverId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `IpConfigurations`<sup>Required</sup> <a name="IpConfigurations" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.ipConfigurations"></a>

```go
func IpConfigurations() DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList">DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.timeouts"></a>

```go
func Timeouts() DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference">DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateDnsResolverIdInput`<sup>Optional</sup> <a name="PrivateDnsResolverIdInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.privateDnsResolverIdInput"></a>

```go
func PrivateDnsResolverIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateDnsResolverId`<sup>Required</sup> <a name="PrivateDnsResolverId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.privateDnsResolverId"></a>

```go
func PrivateDnsResolverId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsResolverInboundEndpointConfig <a name="DataAzurermPrivateDnsResolverInboundEndpointConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolverinboundendpoint"

&dataazurermprivatednsresolverinboundendpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig {
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
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/data-sources/private_dns_resolver_inbound_endpoint#name DataAzurermPrivateDnsResolverInboundEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.privateDnsResolverId">PrivateDnsResolverId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/data-sources/private_dns_resolver_inbound_endpoint#private_dns_resolver_id DataAzurermPrivateDnsResolverInboundEndpoint#private_dns_resolver_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/data-sources/private_dns_resolver_inbound_endpoint#id DataAzurermPrivateDnsResolverInboundEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts">DataAzurermPrivateDnsResolverInboundEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/data-sources/private_dns_resolver_inbound_endpoint#name DataAzurermPrivateDnsResolverInboundEndpoint#name}.

---

##### `PrivateDnsResolverId`<sup>Required</sup> <a name="PrivateDnsResolverId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.privateDnsResolverId"></a>

```go
PrivateDnsResolverId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/data-sources/private_dns_resolver_inbound_endpoint#private_dns_resolver_id DataAzurermPrivateDnsResolverInboundEndpoint#private_dns_resolver_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/data-sources/private_dns_resolver_inbound_endpoint#id DataAzurermPrivateDnsResolverInboundEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.timeouts"></a>

```go
Timeouts DataAzurermPrivateDnsResolverInboundEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts">DataAzurermPrivateDnsResolverInboundEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/data-sources/private_dns_resolver_inbound_endpoint#timeouts DataAzurermPrivateDnsResolverInboundEndpoint#timeouts}

---

### DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations <a name="DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolverinboundendpoint"

&dataazurermprivatednsresolverinboundendpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations {

}
```


### DataAzurermPrivateDnsResolverInboundEndpointTimeouts <a name="DataAzurermPrivateDnsResolverInboundEndpointTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolverinboundendpoint"

&dataazurermprivatednsresolverinboundendpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/data-sources/private_dns_resolver_inbound_endpoint#read DataAzurermPrivateDnsResolverInboundEndpoint#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.15.0/docs/data-sources/private_dns_resolver_inbound_endpoint#read DataAzurermPrivateDnsResolverInboundEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList <a name="DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolverinboundendpoint"

dataazurermprivatednsresolverinboundendpoint.NewDataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.get"></a>

```go
func Get(index *f64) DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference <a name="DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolverinboundendpoint"

dataazurermprivatednsresolverinboundendpoint.NewDataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAllocationMethod">PrivateIpAllocationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations">DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `PrivateIpAllocationMethod`<sup>Required</sup> <a name="PrivateIpAllocationMethod" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAllocationMethod"></a>

```go
func PrivateIpAllocationMethod() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations">DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations</a>

---


### DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference <a name="DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermprivatednsresolverinboundendpoint"

dataazurermprivatednsresolverinboundendpoint.NewDataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



