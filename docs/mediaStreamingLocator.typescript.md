# `azurerm_media_streaming_locator`

Refer to the Terraform Registory for docs: [`azurerm_media_streaming_locator`](https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator).

# `mediaStreamingLocator` Submodule <a name="`mediaStreamingLocator` Submodule" id="@cdktf/provider-azurerm.mediaStreamingLocator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaStreamingLocator <a name="MediaStreamingLocator" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator azurerm_media_streaming_locator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer"></a>

```typescript
import { mediaStreamingLocator } from '@cdktf/provider-azurerm'

new mediaStreamingLocator.MediaStreamingLocator(scope: Construct, id: string, config: MediaStreamingLocatorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig">MediaStreamingLocatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig">MediaStreamingLocatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putContentKey">putContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetAlternativeMediaId">resetAlternativeMediaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetContentKey">resetContentKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetDefaultContentKeyPolicyName">resetDefaultContentKeyPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetFilterNames">resetFilterNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetStreamingLocatorId">resetStreamingLocatorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putContentKey` <a name="putContentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putContentKey"></a>

```typescript
public putContentKey(value: IResolvable | MediaStreamingLocatorContentKey[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putContentKey.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey">MediaStreamingLocatorContentKey</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putTimeouts"></a>

```typescript
public putTimeouts(value: MediaStreamingLocatorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts">MediaStreamingLocatorTimeouts</a>

---

##### `resetAlternativeMediaId` <a name="resetAlternativeMediaId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetAlternativeMediaId"></a>

```typescript
public resetAlternativeMediaId(): void
```

##### `resetContentKey` <a name="resetContentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetContentKey"></a>

```typescript
public resetContentKey(): void
```

##### `resetDefaultContentKeyPolicyName` <a name="resetDefaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetDefaultContentKeyPolicyName"></a>

```typescript
public resetDefaultContentKeyPolicyName(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetFilterNames` <a name="resetFilterNames" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetFilterNames"></a>

```typescript
public resetFilterNames(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetStreamingLocatorId` <a name="resetStreamingLocatorId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetStreamingLocatorId"></a>

```typescript
public resetStreamingLocatorId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isConstruct"></a>

```typescript
import { mediaStreamingLocator } from '@cdktf/provider-azurerm'

mediaStreamingLocator.MediaStreamingLocator.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformElement"></a>

```typescript
import { mediaStreamingLocator } from '@cdktf/provider-azurerm'

mediaStreamingLocator.MediaStreamingLocator.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformResource"></a>

```typescript
import { mediaStreamingLocator } from '@cdktf/provider-azurerm'

mediaStreamingLocator.MediaStreamingLocator.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.contentKey">contentKey</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList">MediaStreamingLocatorContentKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference">MediaStreamingLocatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.alternativeMediaIdInput">alternativeMediaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.assetNameInput">assetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.contentKeyInput">contentKeyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey">MediaStreamingLocatorContentKey</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.defaultContentKeyPolicyNameInput">defaultContentKeyPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.filterNamesInput">filterNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.mediaServicesAccountNameInput">mediaServicesAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingLocatorIdInput">streamingLocatorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingPolicyNameInput">streamingPolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts">MediaStreamingLocatorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.alternativeMediaId">alternativeMediaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.assetName">assetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.defaultContentKeyPolicyName">defaultContentKeyPolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.filterNames">filterNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingLocatorId">streamingLocatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingPolicyName">streamingPolicyName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contentKey`<sup>Required</sup> <a name="contentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.contentKey"></a>

```typescript
public readonly contentKey: MediaStreamingLocatorContentKeyList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList">MediaStreamingLocatorContentKeyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.timeouts"></a>

```typescript
public readonly timeouts: MediaStreamingLocatorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference">MediaStreamingLocatorTimeoutsOutputReference</a>

---

##### `alternativeMediaIdInput`<sup>Optional</sup> <a name="alternativeMediaIdInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.alternativeMediaIdInput"></a>

```typescript
public readonly alternativeMediaIdInput: string;
```

- *Type:* string

---

##### `assetNameInput`<sup>Optional</sup> <a name="assetNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.assetNameInput"></a>

```typescript
public readonly assetNameInput: string;
```

- *Type:* string

---

##### `contentKeyInput`<sup>Optional</sup> <a name="contentKeyInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.contentKeyInput"></a>

```typescript
public readonly contentKeyInput: IResolvable | MediaStreamingLocatorContentKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey">MediaStreamingLocatorContentKey</a>[]

---

##### `defaultContentKeyPolicyNameInput`<sup>Optional</sup> <a name="defaultContentKeyPolicyNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.defaultContentKeyPolicyNameInput"></a>

```typescript
public readonly defaultContentKeyPolicyNameInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `filterNamesInput`<sup>Optional</sup> <a name="filterNamesInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.filterNamesInput"></a>

```typescript
public readonly filterNamesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mediaServicesAccountNameInput`<sup>Optional</sup> <a name="mediaServicesAccountNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.mediaServicesAccountNameInput"></a>

```typescript
public readonly mediaServicesAccountNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `streamingLocatorIdInput`<sup>Optional</sup> <a name="streamingLocatorIdInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingLocatorIdInput"></a>

```typescript
public readonly streamingLocatorIdInput: string;
```

- *Type:* string

---

##### `streamingPolicyNameInput`<sup>Optional</sup> <a name="streamingPolicyNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingPolicyNameInput"></a>

```typescript
public readonly streamingPolicyNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MediaStreamingLocatorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts">MediaStreamingLocatorTimeouts</a>

---

##### `alternativeMediaId`<sup>Required</sup> <a name="alternativeMediaId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.alternativeMediaId"></a>

```typescript
public readonly alternativeMediaId: string;
```

- *Type:* string

---

##### `assetName`<sup>Required</sup> <a name="assetName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.assetName"></a>

```typescript
public readonly assetName: string;
```

- *Type:* string

---

##### `defaultContentKeyPolicyName`<sup>Required</sup> <a name="defaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.defaultContentKeyPolicyName"></a>

```typescript
public readonly defaultContentKeyPolicyName: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `filterNames`<sup>Required</sup> <a name="filterNames" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.filterNames"></a>

```typescript
public readonly filterNames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.mediaServicesAccountName"></a>

```typescript
public readonly mediaServicesAccountName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `streamingLocatorId`<sup>Required</sup> <a name="streamingLocatorId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingLocatorId"></a>

```typescript
public readonly streamingLocatorId: string;
```

- *Type:* string

---

##### `streamingPolicyName`<sup>Required</sup> <a name="streamingPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.streamingPolicyName"></a>

```typescript
public readonly streamingPolicyName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocator.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaStreamingLocatorConfig <a name="MediaStreamingLocatorConfig" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.Initializer"></a>

```typescript
import { mediaStreamingLocator } from '@cdktf/provider-azurerm'

const mediaStreamingLocatorConfig: mediaStreamingLocator.MediaStreamingLocatorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.assetName">assetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#asset_name MediaStreamingLocator#asset_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.mediaServicesAccountName">mediaServicesAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#media_services_account_name MediaStreamingLocator#media_services_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#name MediaStreamingLocator#name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#resource_group_name MediaStreamingLocator#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.streamingPolicyName">streamingPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#streaming_policy_name MediaStreamingLocator#streaming_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.alternativeMediaId">alternativeMediaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#alternative_media_id MediaStreamingLocator#alternative_media_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.contentKey">contentKey</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey">MediaStreamingLocatorContentKey</a>[]</code> | content_key block. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.defaultContentKeyPolicyName">defaultContentKeyPolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#default_content_key_policy_name MediaStreamingLocator#default_content_key_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#end_time MediaStreamingLocator#end_time}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.filterNames">filterNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#filter_names MediaStreamingLocator#filter_names}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#id MediaStreamingLocator#id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#start_time MediaStreamingLocator#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.streamingLocatorId">streamingLocatorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#streaming_locator_id MediaStreamingLocator#streaming_locator_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts">MediaStreamingLocatorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `assetName`<sup>Required</sup> <a name="assetName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.assetName"></a>

```typescript
public readonly assetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#asset_name MediaStreamingLocator#asset_name}.

---

##### `mediaServicesAccountName`<sup>Required</sup> <a name="mediaServicesAccountName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.mediaServicesAccountName"></a>

```typescript
public readonly mediaServicesAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#media_services_account_name MediaStreamingLocator#media_services_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#name MediaStreamingLocator#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#resource_group_name MediaStreamingLocator#resource_group_name}.

---

##### `streamingPolicyName`<sup>Required</sup> <a name="streamingPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.streamingPolicyName"></a>

```typescript
public readonly streamingPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#streaming_policy_name MediaStreamingLocator#streaming_policy_name}.

---

##### `alternativeMediaId`<sup>Optional</sup> <a name="alternativeMediaId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.alternativeMediaId"></a>

```typescript
public readonly alternativeMediaId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#alternative_media_id MediaStreamingLocator#alternative_media_id}.

---

##### `contentKey`<sup>Optional</sup> <a name="contentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.contentKey"></a>

```typescript
public readonly contentKey: IResolvable | MediaStreamingLocatorContentKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey">MediaStreamingLocatorContentKey</a>[]

content_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#content_key MediaStreamingLocator#content_key}

---

##### `defaultContentKeyPolicyName`<sup>Optional</sup> <a name="defaultContentKeyPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.defaultContentKeyPolicyName"></a>

```typescript
public readonly defaultContentKeyPolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#default_content_key_policy_name MediaStreamingLocator#default_content_key_policy_name}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#end_time MediaStreamingLocator#end_time}.

---

##### `filterNames`<sup>Optional</sup> <a name="filterNames" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.filterNames"></a>

```typescript
public readonly filterNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#filter_names MediaStreamingLocator#filter_names}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#id MediaStreamingLocator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#start_time MediaStreamingLocator#start_time}.

---

##### `streamingLocatorId`<sup>Optional</sup> <a name="streamingLocatorId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.streamingLocatorId"></a>

```typescript
public readonly streamingLocatorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#streaming_locator_id MediaStreamingLocator#streaming_locator_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MediaStreamingLocatorTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts">MediaStreamingLocatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#timeouts MediaStreamingLocator#timeouts}

---

### MediaStreamingLocatorContentKey <a name="MediaStreamingLocatorContentKey" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.Initializer"></a>

```typescript
import { mediaStreamingLocator } from '@cdktf/provider-azurerm'

const mediaStreamingLocatorContentKey: mediaStreamingLocator.MediaStreamingLocatorContentKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.contentKeyId">contentKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#content_key_id MediaStreamingLocator#content_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.labelReferenceInStreamingPolicy">labelReferenceInStreamingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#label_reference_in_streaming_policy MediaStreamingLocator#label_reference_in_streaming_policy}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.policyName">policyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#policy_name MediaStreamingLocator#policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#type MediaStreamingLocator#type}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#value MediaStreamingLocator#value}. |

---

##### `contentKeyId`<sup>Optional</sup> <a name="contentKeyId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.contentKeyId"></a>

```typescript
public readonly contentKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#content_key_id MediaStreamingLocator#content_key_id}.

---

##### `labelReferenceInStreamingPolicy`<sup>Optional</sup> <a name="labelReferenceInStreamingPolicy" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.labelReferenceInStreamingPolicy"></a>

```typescript
public readonly labelReferenceInStreamingPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#label_reference_in_streaming_policy MediaStreamingLocator#label_reference_in_streaming_policy}.

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#policy_name MediaStreamingLocator#policy_name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#type MediaStreamingLocator#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#value MediaStreamingLocator#value}.

---

### MediaStreamingLocatorTimeouts <a name="MediaStreamingLocatorTimeouts" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.Initializer"></a>

```typescript
import { mediaStreamingLocator } from '@cdktf/provider-azurerm'

const mediaStreamingLocatorTimeouts: mediaStreamingLocator.MediaStreamingLocatorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#create MediaStreamingLocator#create}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#delete MediaStreamingLocator#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#read MediaStreamingLocator#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#create MediaStreamingLocator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#delete MediaStreamingLocator#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.69.0/docs/resources/media_streaming_locator#read MediaStreamingLocator#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaStreamingLocatorContentKeyList <a name="MediaStreamingLocatorContentKeyList" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer"></a>

```typescript
import { mediaStreamingLocator } from '@cdktf/provider-azurerm'

new mediaStreamingLocator.MediaStreamingLocatorContentKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.get"></a>

```typescript
public get(index: number): MediaStreamingLocatorContentKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey">MediaStreamingLocatorContentKey</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaStreamingLocatorContentKey[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey">MediaStreamingLocatorContentKey</a>[]

---


### MediaStreamingLocatorContentKeyOutputReference <a name="MediaStreamingLocatorContentKeyOutputReference" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer"></a>

```typescript
import { mediaStreamingLocator } from '@cdktf/provider-azurerm'

new mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetContentKeyId">resetContentKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetLabelReferenceInStreamingPolicy">resetLabelReferenceInStreamingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetPolicyName">resetPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentKeyId` <a name="resetContentKeyId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetContentKeyId"></a>

```typescript
public resetContentKeyId(): void
```

##### `resetLabelReferenceInStreamingPolicy` <a name="resetLabelReferenceInStreamingPolicy" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetLabelReferenceInStreamingPolicy"></a>

```typescript
public resetLabelReferenceInStreamingPolicy(): void
```

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetPolicyName"></a>

```typescript
public resetPolicyName(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.contentKeyIdInput">contentKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.labelReferenceInStreamingPolicyInput">labelReferenceInStreamingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.contentKeyId">contentKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.labelReferenceInStreamingPolicy">labelReferenceInStreamingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey">MediaStreamingLocatorContentKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentKeyIdInput`<sup>Optional</sup> <a name="contentKeyIdInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.contentKeyIdInput"></a>

```typescript
public readonly contentKeyIdInput: string;
```

- *Type:* string

---

##### `labelReferenceInStreamingPolicyInput`<sup>Optional</sup> <a name="labelReferenceInStreamingPolicyInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.labelReferenceInStreamingPolicyInput"></a>

```typescript
public readonly labelReferenceInStreamingPolicyInput: string;
```

- *Type:* string

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `contentKeyId`<sup>Required</sup> <a name="contentKeyId" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.contentKeyId"></a>

```typescript
public readonly contentKeyId: string;
```

- *Type:* string

---

##### `labelReferenceInStreamingPolicy`<sup>Required</sup> <a name="labelReferenceInStreamingPolicy" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.labelReferenceInStreamingPolicy"></a>

```typescript
public readonly labelReferenceInStreamingPolicy: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaStreamingLocatorContentKey;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorContentKey">MediaStreamingLocatorContentKey</a>

---


### MediaStreamingLocatorTimeoutsOutputReference <a name="MediaStreamingLocatorTimeoutsOutputReference" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer"></a>

```typescript
import { mediaStreamingLocator } from '@cdktf/provider-azurerm'

new mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts">MediaStreamingLocatorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaStreamingLocatorTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mediaStreamingLocator.MediaStreamingLocatorTimeouts">MediaStreamingLocatorTimeouts</a>

---



