# `azurerm_web_pubsub_shared_private_link_resource`

Refer to the Terraform Registory for docs: [`azurerm_web_pubsub_shared_private_link_resource`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource).

# `webPubsubSharedPrivateLinkResource` Submodule <a name="`webPubsubSharedPrivateLinkResource` Submodule" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubSharedPrivateLinkResource <a name="WebPubsubSharedPrivateLinkResource" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource azurerm_web_pubsub_shared_private_link_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer"></a>

```typescript
import { webPubsubSharedPrivateLinkResource } from '@cdktf/provider-azurerm'

new webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource(scope: Construct, id: string, config: WebPubsubSharedPrivateLinkResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig">WebPubsubSharedPrivateLinkResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig">WebPubsubSharedPrivateLinkResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetRequestMessage">resetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.putTimeouts"></a>

```typescript
public putTimeouts(value: WebPubsubSharedPrivateLinkResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRequestMessage` <a name="resetRequestMessage" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetRequestMessage"></a>

```typescript
public resetRequestMessage(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isConstruct"></a>

```typescript
import { webPubsubSharedPrivateLinkResource } from '@cdktf/provider-azurerm'

webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformElement"></a>

```typescript
import { webPubsubSharedPrivateLinkResource } from '@cdktf/provider-azurerm'

webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformResource"></a>

```typescript
import { webPubsubSharedPrivateLinkResource } from '@cdktf/provider-azurerm'

webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference">WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.requestMessageInput">requestMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.subresourceNameInput">subresourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.webPubsubIdInput">webPubsubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.requestMessage">requestMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.subresourceName">subresourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.webPubsubId">webPubsubId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.timeouts"></a>

```typescript
public readonly timeouts: WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference">WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requestMessageInput`<sup>Optional</sup> <a name="requestMessageInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.requestMessageInput"></a>

```typescript
public readonly requestMessageInput: string;
```

- *Type:* string

---

##### `subresourceNameInput`<sup>Optional</sup> <a name="subresourceNameInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.subresourceNameInput"></a>

```typescript
public readonly subresourceNameInput: string;
```

- *Type:* string

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.targetResourceIdInput"></a>

```typescript
public readonly targetResourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: WebPubsubSharedPrivateLinkResourceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a> | cdktf.IResolvable

---

##### `webPubsubIdInput`<sup>Optional</sup> <a name="webPubsubIdInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.webPubsubIdInput"></a>

```typescript
public readonly webPubsubIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requestMessage`<sup>Required</sup> <a name="requestMessage" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.requestMessage"></a>

```typescript
public readonly requestMessage: string;
```

- *Type:* string

---

##### `subresourceName`<sup>Required</sup> <a name="subresourceName" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.subresourceName"></a>

```typescript
public readonly subresourceName: string;
```

- *Type:* string

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

---

##### `webPubsubId`<sup>Required</sup> <a name="webPubsubId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.webPubsubId"></a>

```typescript
public readonly webPubsubId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubSharedPrivateLinkResourceConfig <a name="WebPubsubSharedPrivateLinkResourceConfig" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.Initializer"></a>

```typescript
import { webPubsubSharedPrivateLinkResource } from '@cdktf/provider-azurerm'

const webPubsubSharedPrivateLinkResourceConfig: webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#name WebPubsubSharedPrivateLinkResource#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.subresourceName">subresourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#subresource_name WebPubsubSharedPrivateLinkResource#subresource_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#target_resource_id WebPubsubSharedPrivateLinkResource#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.webPubsubId">webPubsubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#web_pubsub_id WebPubsubSharedPrivateLinkResource#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#id WebPubsubSharedPrivateLinkResource#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.requestMessage">requestMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#request_message WebPubsubSharedPrivateLinkResource#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#name WebPubsubSharedPrivateLinkResource#name}.

---

##### `subresourceName`<sup>Required</sup> <a name="subresourceName" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.subresourceName"></a>

```typescript
public readonly subresourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#subresource_name WebPubsubSharedPrivateLinkResource#subresource_name}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#target_resource_id WebPubsubSharedPrivateLinkResource#target_resource_id}.

---

##### `webPubsubId`<sup>Required</sup> <a name="webPubsubId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.webPubsubId"></a>

```typescript
public readonly webPubsubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#web_pubsub_id WebPubsubSharedPrivateLinkResource#web_pubsub_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#id WebPubsubSharedPrivateLinkResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requestMessage`<sup>Optional</sup> <a name="requestMessage" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.requestMessage"></a>

```typescript
public readonly requestMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#request_message WebPubsubSharedPrivateLinkResource#request_message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WebPubsubSharedPrivateLinkResourceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#timeouts WebPubsubSharedPrivateLinkResource#timeouts}

---

### WebPubsubSharedPrivateLinkResourceTimeouts <a name="WebPubsubSharedPrivateLinkResourceTimeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.Initializer"></a>

```typescript
import { webPubsubSharedPrivateLinkResource } from '@cdktf/provider-azurerm'

const webPubsubSharedPrivateLinkResourceTimeouts: webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#create WebPubsubSharedPrivateLinkResource#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#delete WebPubsubSharedPrivateLinkResource#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#read WebPubsubSharedPrivateLinkResource#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#update WebPubsubSharedPrivateLinkResource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#create WebPubsubSharedPrivateLinkResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#delete WebPubsubSharedPrivateLinkResource#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#read WebPubsubSharedPrivateLinkResource#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/web_pubsub_shared_private_link_resource#update WebPubsubSharedPrivateLinkResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference <a name="WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { webPubsubSharedPrivateLinkResource } from '@cdktf/provider-azurerm'

new webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WebPubsubSharedPrivateLinkResourceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a> | cdktf.IResolvable

---



