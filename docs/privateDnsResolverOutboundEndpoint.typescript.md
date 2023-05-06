# `azurerm_private_dns_resolver_outbound_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_private_dns_resolver_outbound_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint).

# `privateDnsResolverOutboundEndpoint` Submodule <a name="`privateDnsResolverOutboundEndpoint` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverOutboundEndpoint <a name="PrivateDnsResolverOutboundEndpoint" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint azurerm_private_dns_resolver_outbound_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer"></a>

```typescript
import { privateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

new privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint(scope: Construct, id: string, config: PrivateDnsResolverOutboundEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig">PrivateDnsResolverOutboundEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig">PrivateDnsResolverOutboundEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivateDnsResolverOutboundEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isConstruct"></a>

```typescript
import { privateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isTerraformElement"></a>

```typescript
import { privateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isTerraformResource"></a>

```typescript
import { privateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference">PrivateDnsResolverOutboundEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.privateDnsResolverIdInput">privateDnsResolverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.privateDnsResolverId">privateDnsResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateDnsResolverOutboundEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference">PrivateDnsResolverOutboundEndpointTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateDnsResolverIdInput`<sup>Optional</sup> <a name="privateDnsResolverIdInput" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.privateDnsResolverIdInput"></a>

```typescript
public readonly privateDnsResolverIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: PrivateDnsResolverOutboundEndpointTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateDnsResolverId`<sup>Required</sup> <a name="privateDnsResolverId" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.privateDnsResolverId"></a>

```typescript
public readonly privateDnsResolverId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverOutboundEndpointConfig <a name="PrivateDnsResolverOutboundEndpointConfig" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.Initializer"></a>

```typescript
import { privateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

const privateDnsResolverOutboundEndpointConfig: privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#location PrivateDnsResolverOutboundEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#name PrivateDnsResolverOutboundEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.privateDnsResolverId">privateDnsResolverId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#private_dns_resolver_id PrivateDnsResolverOutboundEndpoint#private_dns_resolver_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#subnet_id PrivateDnsResolverOutboundEndpoint#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#id PrivateDnsResolverOutboundEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#tags PrivateDnsResolverOutboundEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#location PrivateDnsResolverOutboundEndpoint#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#name PrivateDnsResolverOutboundEndpoint#name}.

---

##### `privateDnsResolverId`<sup>Required</sup> <a name="privateDnsResolverId" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.privateDnsResolverId"></a>

```typescript
public readonly privateDnsResolverId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#private_dns_resolver_id PrivateDnsResolverOutboundEndpoint#private_dns_resolver_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#subnet_id PrivateDnsResolverOutboundEndpoint#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#id PrivateDnsResolverOutboundEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#tags PrivateDnsResolverOutboundEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateDnsResolverOutboundEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#timeouts PrivateDnsResolverOutboundEndpoint#timeouts}

---

### PrivateDnsResolverOutboundEndpointTimeouts <a name="PrivateDnsResolverOutboundEndpointTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.Initializer"></a>

```typescript
import { privateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

const privateDnsResolverOutboundEndpointTimeouts: privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#create PrivateDnsResolverOutboundEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#delete PrivateDnsResolverOutboundEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#read PrivateDnsResolverOutboundEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#update PrivateDnsResolverOutboundEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#create PrivateDnsResolverOutboundEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#delete PrivateDnsResolverOutboundEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#read PrivateDnsResolverOutboundEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/private_dns_resolver_outbound_endpoint#update PrivateDnsResolverOutboundEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverOutboundEndpointTimeoutsOutputReference <a name="PrivateDnsResolverOutboundEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { privateDnsResolverOutboundEndpoint } from '@cdktf/provider-azurerm'

new privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PrivateDnsResolverOutboundEndpointTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a> | cdktf.IResolvable

---



