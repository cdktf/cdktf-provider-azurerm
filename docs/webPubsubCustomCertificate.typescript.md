# `azurerm_web_pubsub_custom_certificate`

Refer to the Terraform Registory for docs: [`azurerm_web_pubsub_custom_certificate`](https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate).

# `webPubsubCustomCertificate` Submodule <a name="`webPubsubCustomCertificate` Submodule" id="@cdktf/provider-azurerm.webPubsubCustomCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubCustomCertificate <a name="WebPubsubCustomCertificate" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate azurerm_web_pubsub_custom_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.Initializer"></a>

```typescript
import { webPubsubCustomCertificate } from '@cdktf/provider-azurerm'

new webPubsubCustomCertificate.WebPubsubCustomCertificate(scope: Construct, id: string, config: WebPubsubCustomCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig">WebPubsubCustomCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig">WebPubsubCustomCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.putTimeouts"></a>

```typescript
public putTimeouts(value: WebPubsubCustomCertificateTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts">WebPubsubCustomCertificateTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.isConstruct"></a>

```typescript
import { webPubsubCustomCertificate } from '@cdktf/provider-azurerm'

webPubsubCustomCertificate.WebPubsubCustomCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.isTerraformElement"></a>

```typescript
import { webPubsubCustomCertificate } from '@cdktf/provider-azurerm'

webPubsubCustomCertificate.WebPubsubCustomCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.isTerraformResource"></a>

```typescript
import { webPubsubCustomCertificate } from '@cdktf/provider-azurerm'

webPubsubCustomCertificate.WebPubsubCustomCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.certificateVersion">certificateVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference">WebPubsubCustomCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.customCertificateIdInput">customCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts">WebPubsubCustomCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.webPubsubIdInput">webPubsubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.customCertificateId">customCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.webPubsubId">webPubsubId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateVersion`<sup>Required</sup> <a name="certificateVersion" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.certificateVersion"></a>

```typescript
public readonly certificateVersion: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.timeouts"></a>

```typescript
public readonly timeouts: WebPubsubCustomCertificateTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference">WebPubsubCustomCertificateTimeoutsOutputReference</a>

---

##### `customCertificateIdInput`<sup>Optional</sup> <a name="customCertificateIdInput" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.customCertificateIdInput"></a>

```typescript
public readonly customCertificateIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WebPubsubCustomCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts">WebPubsubCustomCertificateTimeouts</a>

---

##### `webPubsubIdInput`<sup>Optional</sup> <a name="webPubsubIdInput" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.webPubsubIdInput"></a>

```typescript
public readonly webPubsubIdInput: string;
```

- *Type:* string

---

##### `customCertificateId`<sup>Required</sup> <a name="customCertificateId" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.customCertificateId"></a>

```typescript
public readonly customCertificateId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `webPubsubId`<sup>Required</sup> <a name="webPubsubId" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.webPubsubId"></a>

```typescript
public readonly webPubsubId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubCustomCertificateConfig <a name="WebPubsubCustomCertificateConfig" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.Initializer"></a>

```typescript
import { webPubsubCustomCertificate } from '@cdktf/provider-azurerm'

const webPubsubCustomCertificateConfig: webPubsubCustomCertificate.WebPubsubCustomCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.customCertificateId">customCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#custom_certificate_id WebPubsubCustomCertificate#custom_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#name WebPubsubCustomCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.webPubsubId">webPubsubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#web_pubsub_id WebPubsubCustomCertificate#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#id WebPubsubCustomCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts">WebPubsubCustomCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customCertificateId`<sup>Required</sup> <a name="customCertificateId" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.customCertificateId"></a>

```typescript
public readonly customCertificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#custom_certificate_id WebPubsubCustomCertificate#custom_certificate_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#name WebPubsubCustomCertificate#name}.

---

##### `webPubsubId`<sup>Required</sup> <a name="webPubsubId" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.webPubsubId"></a>

```typescript
public readonly webPubsubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#web_pubsub_id WebPubsubCustomCertificate#web_pubsub_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#id WebPubsubCustomCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WebPubsubCustomCertificateTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts">WebPubsubCustomCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#timeouts WebPubsubCustomCertificate#timeouts}

---

### WebPubsubCustomCertificateTimeouts <a name="WebPubsubCustomCertificateTimeouts" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts.Initializer"></a>

```typescript
import { webPubsubCustomCertificate } from '@cdktf/provider-azurerm'

const webPubsubCustomCertificateTimeouts: webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#create WebPubsubCustomCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#delete WebPubsubCustomCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#read WebPubsubCustomCertificate#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#create WebPubsubCustomCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#delete WebPubsubCustomCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.71.0/docs/resources/web_pubsub_custom_certificate#read WebPubsubCustomCertificate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubCustomCertificateTimeoutsOutputReference <a name="WebPubsubCustomCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.Initializer"></a>

```typescript
import { webPubsubCustomCertificate } from '@cdktf/provider-azurerm'

new webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts">WebPubsubCustomCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WebPubsubCustomCertificateTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.webPubsubCustomCertificate.WebPubsubCustomCertificateTimeouts">WebPubsubCustomCertificateTimeouts</a>

---



