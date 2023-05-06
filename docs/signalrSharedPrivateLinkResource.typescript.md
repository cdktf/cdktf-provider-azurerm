# `azurerm_signalr_shared_private_link_resource`

Refer to the Terraform Registory for docs: [`azurerm_signalr_shared_private_link_resource`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource).

# `signalrSharedPrivateLinkResource` Submodule <a name="`signalrSharedPrivateLinkResource` Submodule" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignalrSharedPrivateLinkResource <a name="SignalrSharedPrivateLinkResource" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource azurerm_signalr_shared_private_link_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer"></a>

```typescript
import { signalrSharedPrivateLinkResource } from '@cdktf/provider-azurerm'

new signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource(scope: Construct, id: string, config: SignalrSharedPrivateLinkResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig">SignalrSharedPrivateLinkResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig">SignalrSharedPrivateLinkResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetRequestMessage">resetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.putTimeouts"></a>

```typescript
public putTimeouts(value: SignalrSharedPrivateLinkResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRequestMessage` <a name="resetRequestMessage" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetRequestMessage"></a>

```typescript
public resetRequestMessage(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isConstruct"></a>

```typescript
import { signalrSharedPrivateLinkResource } from '@cdktf/provider-azurerm'

signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformElement"></a>

```typescript
import { signalrSharedPrivateLinkResource } from '@cdktf/provider-azurerm'

signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformResource"></a>

```typescript
import { signalrSharedPrivateLinkResource } from '@cdktf/provider-azurerm'

signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference">SignalrSharedPrivateLinkResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.requestMessageInput">requestMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.signalrServiceIdInput">signalrServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.subResourceNameInput">subResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.requestMessage">requestMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.signalrServiceId">signalrServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.subResourceName">subResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.timeouts"></a>

```typescript
public readonly timeouts: SignalrSharedPrivateLinkResourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference">SignalrSharedPrivateLinkResourceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requestMessageInput`<sup>Optional</sup> <a name="requestMessageInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.requestMessageInput"></a>

```typescript
public readonly requestMessageInput: string;
```

- *Type:* string

---

##### `signalrServiceIdInput`<sup>Optional</sup> <a name="signalrServiceIdInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.signalrServiceIdInput"></a>

```typescript
public readonly signalrServiceIdInput: string;
```

- *Type:* string

---

##### `subResourceNameInput`<sup>Optional</sup> <a name="subResourceNameInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.subResourceNameInput"></a>

```typescript
public readonly subResourceNameInput: string;
```

- *Type:* string

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.targetResourceIdInput"></a>

```typescript
public readonly targetResourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: SignalrSharedPrivateLinkResourceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requestMessage`<sup>Required</sup> <a name="requestMessage" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.requestMessage"></a>

```typescript
public readonly requestMessage: string;
```

- *Type:* string

---

##### `signalrServiceId`<sup>Required</sup> <a name="signalrServiceId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.signalrServiceId"></a>

```typescript
public readonly signalrServiceId: string;
```

- *Type:* string

---

##### `subResourceName`<sup>Required</sup> <a name="subResourceName" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.subResourceName"></a>

```typescript
public readonly subResourceName: string;
```

- *Type:* string

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SignalrSharedPrivateLinkResourceConfig <a name="SignalrSharedPrivateLinkResourceConfig" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.Initializer"></a>

```typescript
import { signalrSharedPrivateLinkResource } from '@cdktf/provider-azurerm'

const signalrSharedPrivateLinkResourceConfig: signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#name SignalrSharedPrivateLinkResource#name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.signalrServiceId">signalrServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#signalr_service_id SignalrSharedPrivateLinkResource#signalr_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.subResourceName">subResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#sub_resource_name SignalrSharedPrivateLinkResource#sub_resource_name}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#target_resource_id SignalrSharedPrivateLinkResource#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#id SignalrSharedPrivateLinkResource#id}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.requestMessage">requestMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#request_message SignalrSharedPrivateLinkResource#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#name SignalrSharedPrivateLinkResource#name}.

---

##### `signalrServiceId`<sup>Required</sup> <a name="signalrServiceId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.signalrServiceId"></a>

```typescript
public readonly signalrServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#signalr_service_id SignalrSharedPrivateLinkResource#signalr_service_id}.

---

##### `subResourceName`<sup>Required</sup> <a name="subResourceName" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.subResourceName"></a>

```typescript
public readonly subResourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#sub_resource_name SignalrSharedPrivateLinkResource#sub_resource_name}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#target_resource_id SignalrSharedPrivateLinkResource#target_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#id SignalrSharedPrivateLinkResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requestMessage`<sup>Optional</sup> <a name="requestMessage" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.requestMessage"></a>

```typescript
public readonly requestMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#request_message SignalrSharedPrivateLinkResource#request_message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SignalrSharedPrivateLinkResourceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#timeouts SignalrSharedPrivateLinkResource#timeouts}

---

### SignalrSharedPrivateLinkResourceTimeouts <a name="SignalrSharedPrivateLinkResourceTimeouts" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.Initializer"></a>

```typescript
import { signalrSharedPrivateLinkResource } from '@cdktf/provider-azurerm'

const signalrSharedPrivateLinkResourceTimeouts: signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#create SignalrSharedPrivateLinkResource#create}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#delete SignalrSharedPrivateLinkResource#delete}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#read SignalrSharedPrivateLinkResource#read}. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#update SignalrSharedPrivateLinkResource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#create SignalrSharedPrivateLinkResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#delete SignalrSharedPrivateLinkResource#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#read SignalrSharedPrivateLinkResource#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/signalr_shared_private_link_resource#update SignalrSharedPrivateLinkResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SignalrSharedPrivateLinkResourceTimeoutsOutputReference <a name="SignalrSharedPrivateLinkResourceTimeoutsOutputReference" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { signalrSharedPrivateLinkResource } from '@cdktf/provider-azurerm'

new signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SignalrSharedPrivateLinkResourceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.signalrSharedPrivateLinkResource.SignalrSharedPrivateLinkResourceTimeouts">SignalrSharedPrivateLinkResourceTimeouts</a> | cdktf.IResolvable

---



