# `azurerm_api_management_gateway_host_name_configuration`

Refer to the Terraform Registory for docs: [`azurerm_api_management_gateway_host_name_configuration`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration).

# `apiManagementGatewayHostNameConfiguration` Submodule <a name="`apiManagementGatewayHostNameConfiguration` Submodule" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementGatewayHostNameConfiguration <a name="ApiManagementGatewayHostNameConfiguration" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration azurerm_api_management_gateway_host_name_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer"></a>

```typescript
import { apiManagementGatewayHostNameConfiguration } from '@cdktf/provider-azurerm'

new apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration(scope: Construct, id: string, config: ApiManagementGatewayHostNameConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig">ApiManagementGatewayHostNameConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig">ApiManagementGatewayHostNameConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetHttp2Enabled">resetHttp2Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetRequestClientCertificateEnabled">resetRequestClientCertificateEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls10Enabled">resetTls10Enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls11Enabled">resetTls11Enabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: ApiManagementGatewayHostNameConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

---

##### `resetHttp2Enabled` <a name="resetHttp2Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetHttp2Enabled"></a>

```typescript
public resetHttp2Enabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRequestClientCertificateEnabled` <a name="resetRequestClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetRequestClientCertificateEnabled"></a>

```typescript
public resetRequestClientCertificateEnabled(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTls10Enabled` <a name="resetTls10Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls10Enabled"></a>

```typescript
public resetTls10Enabled(): void
```

##### `resetTls11Enabled` <a name="resetTls11Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.resetTls11Enabled"></a>

```typescript
public resetTls11Enabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isConstruct"></a>

```typescript
import { apiManagementGatewayHostNameConfiguration } from '@cdktf/provider-azurerm'

apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformElement"></a>

```typescript
import { apiManagementGatewayHostNameConfiguration } from '@cdktf/provider-azurerm'

apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformResource"></a>

```typescript
import { apiManagementGatewayHostNameConfiguration } from '@cdktf/provider-azurerm'

apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference">ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementIdInput">apiManagementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayNameInput">gatewayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2EnabledInput">http2EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabledInput">requestClientCertificateEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10EnabledInput">tls10EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11EnabledInput">tls11EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementId">apiManagementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayName">gatewayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabled">requestClientCertificateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10Enabled">tls10Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11Enabled">tls11Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference">ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference</a>

---

##### `apiManagementIdInput`<sup>Optional</sup> <a name="apiManagementIdInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementIdInput"></a>

```typescript
public readonly apiManagementIdInput: string;
```

- *Type:* string

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `gatewayNameInput`<sup>Optional</sup> <a name="gatewayNameInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayNameInput"></a>

```typescript
public readonly gatewayNameInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `http2EnabledInput`<sup>Optional</sup> <a name="http2EnabledInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2EnabledInput"></a>

```typescript
public readonly http2EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requestClientCertificateEnabledInput`<sup>Optional</sup> <a name="requestClientCertificateEnabledInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabledInput"></a>

```typescript
public readonly requestClientCertificateEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ApiManagementGatewayHostNameConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

---

##### `tls10EnabledInput`<sup>Optional</sup> <a name="tls10EnabledInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10EnabledInput"></a>

```typescript
public readonly tls10EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tls11EnabledInput`<sup>Optional</sup> <a name="tls11EnabledInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11EnabledInput"></a>

```typescript
public readonly tls11EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.apiManagementId"></a>

```typescript
public readonly apiManagementId: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.gatewayName"></a>

```typescript
public readonly gatewayName: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requestClientCertificateEnabled`<sup>Required</sup> <a name="requestClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.requestClientCertificateEnabled"></a>

```typescript
public readonly requestClientCertificateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tls10Enabled`<sup>Required</sup> <a name="tls10Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls10Enabled"></a>

```typescript
public readonly tls10Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tls11Enabled`<sup>Required</sup> <a name="tls11Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tls11Enabled"></a>

```typescript
public readonly tls11Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementGatewayHostNameConfigurationConfig <a name="ApiManagementGatewayHostNameConfigurationConfig" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.Initializer"></a>

```typescript
import { apiManagementGatewayHostNameConfiguration } from '@cdktf/provider-azurerm'

const apiManagementGatewayHostNameConfigurationConfig: apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.apiManagementId">apiManagementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#api_management_id ApiManagementGatewayHostNameConfiguration#api_management_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.certificateId">certificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#certificate_id ApiManagementGatewayHostNameConfiguration#certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.gatewayName">gatewayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#gateway_name ApiManagementGatewayHostNameConfiguration#gateway_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#host_name ApiManagementGatewayHostNameConfiguration#host_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#name ApiManagementGatewayHostNameConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.http2Enabled">http2Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#http2_enabled ApiManagementGatewayHostNameConfiguration#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#id ApiManagementGatewayHostNameConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.requestClientCertificateEnabled">requestClientCertificateEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#request_client_certificate_enabled ApiManagementGatewayHostNameConfiguration#request_client_certificate_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls10Enabled">tls10Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#tls10_enabled ApiManagementGatewayHostNameConfiguration#tls10_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls11Enabled">tls11Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#tls11_enabled ApiManagementGatewayHostNameConfiguration#tls11_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiManagementId`<sup>Required</sup> <a name="apiManagementId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.apiManagementId"></a>

```typescript
public readonly apiManagementId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#api_management_id ApiManagementGatewayHostNameConfiguration#api_management_id}.

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#certificate_id ApiManagementGatewayHostNameConfiguration#certificate_id}.

---

##### `gatewayName`<sup>Required</sup> <a name="gatewayName" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.gatewayName"></a>

```typescript
public readonly gatewayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#gateway_name ApiManagementGatewayHostNameConfiguration#gateway_name}.

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#host_name ApiManagementGatewayHostNameConfiguration#host_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#name ApiManagementGatewayHostNameConfiguration#name}.

---

##### `http2Enabled`<sup>Optional</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#http2_enabled ApiManagementGatewayHostNameConfiguration#http2_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#id ApiManagementGatewayHostNameConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requestClientCertificateEnabled`<sup>Optional</sup> <a name="requestClientCertificateEnabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.requestClientCertificateEnabled"></a>

```typescript
public readonly requestClientCertificateEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#request_client_certificate_enabled ApiManagementGatewayHostNameConfiguration#request_client_certificate_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ApiManagementGatewayHostNameConfigurationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#timeouts ApiManagementGatewayHostNameConfiguration#timeouts}

---

##### `tls10Enabled`<sup>Optional</sup> <a name="tls10Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls10Enabled"></a>

```typescript
public readonly tls10Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#tls10_enabled ApiManagementGatewayHostNameConfiguration#tls10_enabled}.

---

##### `tls11Enabled`<sup>Optional</sup> <a name="tls11Enabled" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationConfig.property.tls11Enabled"></a>

```typescript
public readonly tls11Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#tls11_enabled ApiManagementGatewayHostNameConfiguration#tls11_enabled}.

---

### ApiManagementGatewayHostNameConfigurationTimeouts <a name="ApiManagementGatewayHostNameConfigurationTimeouts" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.Initializer"></a>

```typescript
import { apiManagementGatewayHostNameConfiguration } from '@cdktf/provider-azurerm'

const apiManagementGatewayHostNameConfigurationTimeouts: apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#create ApiManagementGatewayHostNameConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#delete ApiManagementGatewayHostNameConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#read ApiManagementGatewayHostNameConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#update ApiManagementGatewayHostNameConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#create ApiManagementGatewayHostNameConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#delete ApiManagementGatewayHostNameConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#read ApiManagementGatewayHostNameConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/api_management_gateway_host_name_configuration#update ApiManagementGatewayHostNameConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference <a name="ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { apiManagementGatewayHostNameConfiguration } from '@cdktf/provider-azurerm'

new apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiManagementGatewayHostNameConfigurationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.apiManagementGatewayHostNameConfiguration.ApiManagementGatewayHostNameConfigurationTimeouts">ApiManagementGatewayHostNameConfigurationTimeouts</a>

---



